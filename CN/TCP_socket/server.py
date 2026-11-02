import socket
import threading

def receive_messages(conn):
    while True:
        try:
            msg = conn.recv(1024).decode()
            if not msg or msg.lower() == "exit":
                print("\nClient disconnected.")
                break
            print(f"\nClient: {msg}")
            print("You: ", end="", flush=True)
        except:
            break

    conn.close()

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind(("127.0.0.1", 5000))
server.listen(1)

print("Waiting for client...")
conn, addr = server.accept()
print("Client connected!")

threading.Thread(target=receive_messages, args=(conn,), daemon=True).start()

try:
    while True:
        msg = input("You: ")
        conn.sendall(msg.encode())
        if msg.lower() == "exit":
            break
finally:
    conn.close()
    server.close()