import pandas as pd
import numpy as np
from flask import send_file
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_style('whitegrid')
plt.style.use("fivethirtyeight")
import matplotlib
# For reading stock data from yahoo
from pandas_datareader.data import DataReader
import yfinance as yf
from pandas_datareader import data as pdr
matplotlib.use('Agg')
yf.pdr_override()

# For time stamps
from datetime import datetime
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM

company = "AMZN"

def predictStock(company):
    df = pdr.get_data_yahoo(company, start='2012-01-01', end=datetime.now())
    # Show the data
    print(df.head(10))

    data = df.filter(['Close'])
    dataset = data.values
    training_data_len = int(np.ceil(len(dataset)*0.95))
    full_len = int(len(dataset))


    scaler = MinMaxScaler(feature_range=(0,1))
    scaled_data = scaler.fit_transform(dataset)

    print(scaled_data)

    # Create the training data set 
    # Create the scaled training data set
    train_data = scaled_data[0:int(training_data_len), :]
    # Split the data into x_train and y_train data sets
    x_train = []
    y_train = []

    for i in range(60, len(train_data)):
        x_train.append(train_data[i-60:i, 0])
        y_train.append(train_data[i, 0])
        if i<= 61:
            print(x_train)
            print(y_train)
            print()

    # Convert the x_train and y_train to numpy arrays 
    x_train, y_train = np.array(x_train), np.array(y_train)

    # Reshape the data
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
    # x_train.shape

    print(x_train)


    # Assuming x_train is already reshaped to (samples, timesteps, features)
    # and y_train is a 1D array of target values

    # Build the LSTM model
    model = Sequential()
    # Adjust the input_shape to match your data's shape
    model.add(LSTM(128, return_sequences=True, input_shape=(x_train.shape[1], x_train.shape[2])))
    model.add(LSTM(64, return_sequences=False))
    # Adjust the output layer to match the shape of y_train
    model.add(Dense(1)) # Assuming y_train is a 1D array

    # Compile the model
    model.compile(optimizer='adam', loss='mean_squared_error')

    # Train the model with more appropriate batch size and epochs
    model.fit(x_train, y_train, batch_size=32, epochs=1) # Increased batch size and epochs

    test_data = scaled_data[training_data_len- 60: , :]
    # Create the data sets x_test and y_test
    x_test = []
    for i in range(60, len(test_data)):
        x_test.append(test_data[i-60:i, 0])

    # Convert the data to a numpy array
    x_test = np.array(x_test)
    print(x_test)

    # Reshape the data
    x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1 ))
    print(x_test)

    # Get the models predicted price values 
    predictions = model.predict(x_test)
    predictions = scaler.inverse_transform(predictions)
    train = data[:training_data_len]
    valid = data[training_data_len:]
    valid['Predictions'] = predictions

    plt.figure(figsize=(16,6))
    plt.title('Model')
    plt.xlabel('Date', fontsize=18)
    plt.ylabel('Close Price USD ($)', fontsize=18)
    plt.plot(train['Close'])
    plt.plot(valid[['Close', 'Predictions']])
    plt.legend(['Train', 'Val', 'Predictions'], loc='lower right')
    plt.savefig('stock_prediction.png', format='png')