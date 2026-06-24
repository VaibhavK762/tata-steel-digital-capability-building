import requests
from pprint import pprint

print("\nALL DOCUMENTS")
pprint(
    requests.get(
        "http://127.0.0.1:8000/documents"
    ).json()[:3]
)

print("\nRECENT")
pprint(
    requests.get(
        "http://127.0.0.1:8000/documents/recent"
    ).json()
)

print("\nSAFETY")
pprint(
    requests.get(
        "http://127.0.0.1:8000/documents/category/Safety"
    ).json()
)