import requests

def main():
    res = requests.get("https://www.google.com/")
    print(res.json)

main()