import socket
import threading

def receive_messages(client):
    while True:
        try:
            msg = client.recv(1024).decode()
            if not msg or msg.lower() == "exit":
                print("\nServer disconnected.")
                break
            print(f"\nServer: {msg}")
            print("You: ", end="", flush=True)
        except:
            break

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("127.0.0.1", 5000))

print("Connected! Start chatting.")

threading.Thread(target=receive_messages, args=(client,), daemon=True).start()

try:
    while True:
        msg = input("You: ")
        client.sendall(msg.encode())
        if msg.lower() == "exit":
            break
finally:
    client.close()