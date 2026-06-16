from backend.services.dashboard_service import (
    get_employee_dashboard
)

result = get_employee_dashboard(1)

from pprint import pprint
pprint(result)