# test_ld_dashboard.py

from pprint import pprint

from backend.services.dashboard_service import (
    get_ld_dashboard
)

pprint(
    get_ld_dashboard()
)