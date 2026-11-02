import socket

sender = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

receiver_address = ("127.0.0.1", 5001)
filename = "sample.txt"

with open(filename, "rb") as file:
    while True:
        data = file.read(1024)

        if not data:
            break

        sender.sendto(data, receiver_address)

sender.sendto(b"EOF", receiver_address)

print("File sent successfully!")
sender.close()