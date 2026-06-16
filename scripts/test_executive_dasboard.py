# test_executive_dashboard.py

from pprint import pprint

from backend.services.dashboard_service import (
    get_executive_dashboard
)

pprint(
    get_executive_dashboard(56)
)