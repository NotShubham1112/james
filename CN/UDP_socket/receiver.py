import socket

receiver = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
receiver.bind(("127.0.0.1", 5001))

print("Waiting for file...")

with open("received_sample.txt", "wb") as file:
    while True:
        data, addr = receiver.recvfrom(4096)

        if data == b"EOF":
            break

        file.write(data)

print("File received successfully!")
receiver.close()