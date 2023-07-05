import re
from flask import Flask
from flask.globals import request
from flask.helpers import send_from_directory
from flask.json import jsonify
from flask_cors import CORS,cross_origin
import locale
import numpy as np
from tensorflow import keras
import tensorflow as tf
import nltk
nltk.data.path.append('./nltk_data/')
model=keras.Sequential([
    keras.layers.Dense(1000,input_shape=(9202,),activation='relu'),
    keras.layers.Dense(500,activation='relu'),
    keras.layers.Dense(250,activation='relu'),
    keras.layers.Dense(100,activation='relu'),
    keras.layers.Dense(50,activation='relu'),
    keras.layers.Dense(25,activation='relu'),
    keras.layers.Dense(1,activation='sigmoid')
])
model.compile(optimizer='adam',loss=tf.keras.losses.BinaryCrossentropy(from_logits=True),
              metrics=['accuracy'])
model.load_weights('model.h5')

def remove_punctuation_and_stopwords(message):
    import string
    from nltk.corpus import stopwords
    message_no_punctuation = [ch for ch in message if ch not in string.punctuation]
    message_no_punctuation = "".join(message_no_punctuation).split()
    message_no_punctuation_no_stopwords = [word.lower() for word in message_no_punctuation if word.lower() not in stopwords.words("english")]
    return message_no_punctuation_no_stopwords

def processmessage(message):
    length=len(message)
    newmessage=remove_punctuation_and_stopwords(message)
    newmessage=" ".join(newmessage)
    newmessage=[newmessage]
    print('new',newmessage)
    import pickle
    with open('vectorizer.pkl', 'rb') as fid:
        vectorizer = pickle.load(fid)
    data_tfidf = vectorizer.transform(newmessage)
    print(data_tfidf.shape)
    from scipy.sparse import  hstack
    X2 = hstack((data_tfidf ,np.array(length))).A
    return X2

app = Flask(__name__,static_folder='spam_detector/build',static_url_path='')
CORS(app)
@app.route("/getpred",methods=['POST'])
@cross_origin()
def getpred():
    content = request.get_json()
    message=content['message']
    message=processmessage(message)
    print('newX2=',message.shape)
    result=model.predict(message)
    print('result',result)
    if(result[0][0]<0.5):
        result="Don't worry its not a Spam Message"
    else:
        result="Warning! this is a Spam Message"
    return jsonify({"result":result})
@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder,'index.html')
if __name__=='__main__':
    app.run(debug=True)