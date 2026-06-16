from pprint import pprint

from backend.services.dashboard_service import (
    get_manager_dashboard
)

pprint(
    get_manager_dashboard(56)
)