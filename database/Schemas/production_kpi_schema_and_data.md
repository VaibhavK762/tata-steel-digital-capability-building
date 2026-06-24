# Schema and Data: production_kpi

This document provides the database schema and full data dump for the `production_kpi` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 10
- **Total Rows:** 450

## SQL Definition
```sql
CREATE TABLE production_kpi (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            unit TEXT,
            department TEXT,
            target_output INTEGER,
            actual_output INTEGER,
            efficiency_pct REAL,
            downtime_hours REAL,
            downtime_reason TEXT,
            performance_status TEXT
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `date` | TEXT | No | Yes | `NULL` |  |
| 2 | `unit` | TEXT | No | Yes | `NULL` |  |
| 3 | `department` | TEXT | No | Yes | `NULL` |  |
| 4 | `target_output` | INTEGER | No | Yes | `NULL` |  |
| 5 | `actual_output` | INTEGER | No | Yes | `NULL` |  |
| 6 | `efficiency_pct` | REAL | No | Yes | `NULL` |  |
| 7 | `downtime_hours` | REAL | No | Yes | `NULL` |  |
| 8 | `downtime_reason` | TEXT | No | Yes | `NULL` |  |
| 9 | `performance_status` | TEXT | No | Yes | `NULL` |  |

## Table Data
| id | date | unit | department | target_output | actual_output | efficiency_pct | downtime_hours | downtime_reason | performance_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-01-01 | Unit 1 | Mechanical | 928 | 899 | 96.9 | 3.2 | Shift Change Delay | On Target |
| 2 | 2026-01-02 | Unit 1 | Mechanical | 919 | 887 | 96.6 | 0.6 | None | On Target |
| 3 | 2026-01-03 | Unit 1 | Mechanical | 920 | 816 | 88.8 | 1.9 | None | Below Target |
| 4 | 2026-01-04 | Unit 1 | Mechanical | 914 | 797 | 87.3 | 0.7 | None | Below Target |
| 5 | 2026-01-05 | Unit 1 | Mechanical | 970 | 881 | 90.8 | 5.3 | Power Outage | Below Target |
| 6 | 2026-01-06 | Unit 1 | Mechanical | 961 | 842 | 87.6 | 1.9 | None | Below Target |
| 7 | 2026-01-07 | Unit 1 | Mechanical | 984 | 884 | 89.9 | 2.9 | Quality Check | Below Target |
| 8 | 2026-01-08 | Unit 1 | Mechanical | 982 | 921 | 93.9 | 5.1 | Equipment Failure | Below Target |
| 9 | 2026-01-09 | Unit 1 | Mechanical | 918 | 806 | 87.8 | 1.9 | None | Below Target |
| 10 | 2026-01-10 | Unit 1 | Mechanical | 954 | 695 | 72.9 | 0.3 | None | Critical |
| 11 | 2026-01-11 | Unit 1 | Mechanical | 920 | 722 | 78.6 | 1.5 | None | Critical |
| 12 | 2026-01-12 | Unit 1 | Mechanical | 965 | 923 | 95.7 | 2.5 | Quality Check | On Target |
| 13 | 2026-01-13 | Unit 1 | Mechanical | 906 | 694 | 76.7 | 5.7 | Power Outage | Critical |
| 14 | 2026-01-14 | Unit 1 | Mechanical | 904 | 844 | 93.4 | 3.0 | Quality Check | Below Target |
| 15 | 2026-01-15 | Unit 1 | Mechanical | 900 | 630 | 70.1 | 1.5 | None | Critical |
| 16 | 2026-01-16 | Unit 1 | Mechanical | 920 | 881 | 95.8 | 6.0 | Equipment Failure | On Target |
| 17 | 2026-01-17 | Unit 1 | Mechanical | 989 | 758 | 76.7 | 1.6 | None | Critical |
| 18 | 2026-01-18 | Unit 1 | Mechanical | 932 | 657 | 70.5 | 5.5 | Raw Material Shortage | Critical |
| 19 | 2026-01-19 | Unit 1 | Mechanical | 910 | 680 | 74.8 | 5.9 | Power Outage | Critical |
| 20 | 2026-01-20 | Unit 1 | Mechanical | 936 | 849 | 90.8 | 2.9 | Quality Check | Below Target |
| 21 | 2026-01-21 | Unit 1 | Mechanical | 953 | 809 | 85.0 | 5.2 | Power Outage | Below Target |
| 22 | 2026-01-22 | Unit 1 | Mechanical | 989 | 856 | 86.6 | 3.6 | Scheduled Maintenance | Below Target |
| 23 | 2026-01-23 | Unit 1 | Mechanical | 912 | 655 | 71.9 | 0.9 | None | Critical |
| 24 | 2026-01-24 | Unit 1 | Mechanical | 986 | 790 | 80.2 | 4.9 | Raw Material Shortage | Below Target |
| 25 | 2026-01-25 | Unit 1 | Mechanical | 989 | 938 | 94.9 | 5.0 | Raw Material Shortage | Below Target |
| 26 | 2026-01-26 | Unit 1 | Mechanical | 951 | 651 | 68.5 | 2.0 | None | Critical |
| 27 | 2026-01-27 | Unit 1 | Mechanical | 953 | 642 | 67.5 | 0.3 | None | Critical |
| 28 | 2026-01-28 | Unit 1 | Mechanical | 950 | 925 | 97.4 | 4.4 | Raw Material Shortage | On Target |
| 29 | 2026-01-29 | Unit 1 | Mechanical | 918 | 798 | 87.0 | 4.1 | Power Outage | Below Target |
| 30 | 2026-01-30 | Unit 1 | Mechanical | 981 | 670 | 68.4 | 3.3 | Shift Change Delay | Critical |
| 31 | 2026-01-31 | Unit 1 | Mechanical | 971 | 911 | 93.9 | 3.8 | Scheduled Maintenance | Below Target |
| 32 | 2026-02-01 | Unit 1 | Mechanical | 984 | 782 | 79.5 | 0.8 | None | Critical |
| 33 | 2026-02-02 | Unit 1 | Mechanical | 964 | 933 | 96.8 | 5.9 | Power Outage | On Target |
| 34 | 2026-02-03 | Unit 1 | Mechanical | 965 | 767 | 79.5 | 0.9 | None | Critical |
| 35 | 2026-02-04 | Unit 1 | Mechanical | 997 | 779 | 78.1 | 2.1 | Scheduled Maintenance | Critical |
| 36 | 2026-02-05 | Unit 1 | Mechanical | 988 | 938 | 95.0 | 1.0 | None | Below Target |
| 37 | 2026-02-06 | Unit 1 | Mechanical | 984 | 915 | 93.0 | 3.3 | Shift Change Delay | Below Target |
| 38 | 2026-02-07 | Unit 1 | Mechanical | 929 | 623 | 67.1 | 2.5 | Quality Check | Critical |
| 39 | 2026-02-08 | Unit 1 | Mechanical | 1000 | 878 | 87.9 | 3.3 | Quality Check | Below Target |
| 40 | 2026-02-09 | Unit 1 | Mechanical | 902 | 616 | 68.4 | 1.0 | None | Critical |
| 41 | 2026-02-10 | Unit 1 | Mechanical | 927 | 815 | 88.0 | 0.6 | None | Below Target |
| 42 | 2026-02-11 | Unit 1 | Mechanical | 914 | 600 | 65.7 | 2.7 | Shift Change Delay | Critical |
| 43 | 2026-02-12 | Unit 1 | Mechanical | 913 | 820 | 89.8 | 1.3 | None | Below Target |
| 44 | 2026-02-13 | Unit 1 | Mechanical | 930 | 709 | 76.3 | 2.3 | Quality Check | Critical |
| 45 | 2026-02-14 | Unit 1 | Mechanical | 994 | 670 | 67.4 | 4.7 | Equipment Failure | Critical |
| 46 | 2026-02-15 | Unit 1 | Mechanical | 991 | 793 | 80.1 | 4.9 | Raw Material Shortage | Below Target |
| 47 | 2026-02-16 | Unit 1 | Mechanical | 951 | 826 | 86.9 | 5.6 | Power Outage | Below Target |
| 48 | 2026-02-17 | Unit 1 | Mechanical | 980 | 940 | 96.0 | 1.8 | None | On Target |
| 49 | 2026-02-18 | Unit 1 | Mechanical | 965 | 909 | 94.3 | 5.4 | Raw Material Shortage | Below Target |
| 50 | 2026-02-19 | Unit 1 | Mechanical | 911 | 662 | 72.7 | 0.7 | None | Critical |
| 51 | 2026-02-20 | Unit 1 | Mechanical | 916 | 734 | 80.2 | 4.9 | Power Outage | Below Target |
| 52 | 2026-02-21 | Unit 1 | Mechanical | 973 | 753 | 77.5 | 1.2 | None | Critical |
| 53 | 2026-02-22 | Unit 1 | Mechanical | 993 | 832 | 83.8 | 0.6 | None | Below Target |
| 54 | 2026-02-23 | Unit 1 | Mechanical | 951 | 765 | 80.5 | 1.2 | None | Below Target |
| 55 | 2026-02-24 | Unit 1 | Mechanical | 987 | 919 | 93.2 | 2.9 | Quality Check | Below Target |
| 56 | 2026-02-25 | Unit 1 | Mechanical | 943 | 718 | 76.2 | 2.2 | Quality Check | Critical |
| 57 | 2026-02-26 | Unit 1 | Mechanical | 905 | 686 | 75.9 | 0.2 | None | Critical |
| 58 | 2026-02-27 | Unit 1 | Mechanical | 978 | 727 | 74.3 | 4.4 | Power Outage | Critical |
| 59 | 2026-02-28 | Unit 1 | Mechanical | 971 | 701 | 72.2 | 3.4 | Shift Change Delay | Critical |
| 60 | 2026-03-01 | Unit 1 | Mechanical | 938 | 900 | 96.0 | 0.8 | None | On Target |
| 61 | 2026-03-02 | Unit 1 | Mechanical | 938 | 766 | 81.7 | 2.6 | Scheduled Maintenance | Below Target |
| 62 | 2026-03-03 | Unit 1 | Mechanical | 902 | 690 | 76.5 | 1.4 | None | Critical |
| 63 | 2026-03-04 | Unit 1 | Mechanical | 922 | 662 | 71.8 | 0.9 | None | Critical |
| 64 | 2026-03-05 | Unit 1 | Mechanical | 953 | 645 | 67.8 | 0.3 | None | Critical |
| 65 | 2026-03-06 | Unit 1 | Mechanical | 941 | 887 | 94.3 | 1.1 | None | Below Target |
| 66 | 2026-03-07 | Unit 1 | Mechanical | 950 | 818 | 86.2 | 5.4 | Power Outage | Below Target |
| 67 | 2026-03-08 | Unit 1 | Mechanical | 999 | 702 | 70.3 | 2.0 | None | Critical |
| 68 | 2026-03-09 | Unit 1 | Mechanical | 990 | 773 | 78.1 | 5.6 | Power Outage | Critical |
| 69 | 2026-03-10 | Unit 1 | Mechanical | 914 | 641 | 70.1 | 1.8 | None | Critical |
| 70 | 2026-03-11 | Unit 1 | Mechanical | 939 | 803 | 85.6 | 0.7 | None | Below Target |
| 71 | 2026-03-12 | Unit 1 | Mechanical | 917 | 894 | 97.5 | 3.3 | Scheduled Maintenance | On Target |
| 72 | 2026-03-13 | Unit 1 | Mechanical | 956 | 800 | 83.7 | 2.3 | Shift Change Delay | Below Target |
| 73 | 2026-03-14 | Unit 1 | Mechanical | 994 | 726 | 73.1 | 4.4 | Raw Material Shortage | Critical |
| 74 | 2026-03-15 | Unit 1 | Mechanical | 946 | 720 | 76.2 | 4.0 | Quality Check | Critical |
| 75 | 2026-03-16 | Unit 1 | Mechanical | 942 | 781 | 83.0 | 5.2 | Raw Material Shortage | Below Target |
| 76 | 2026-03-17 | Unit 1 | Mechanical | 951 | 757 | 79.6 | 5.2 | Raw Material Shortage | Critical |
| 77 | 2026-03-18 | Unit 1 | Mechanical | 997 | 701 | 70.4 | 5.1 | Raw Material Shortage | Critical |
| 78 | 2026-03-19 | Unit 1 | Mechanical | 918 | 795 | 86.7 | 1.8 | None | Below Target |
| 79 | 2026-03-20 | Unit 1 | Mechanical | 942 | 698 | 74.1 | 0.6 | None | Critical |
| 80 | 2026-03-21 | Unit 1 | Mechanical | 922 | 802 | 87.1 | 2.3 | Shift Change Delay | Below Target |
| 81 | 2026-03-22 | Unit 1 | Mechanical | 903 | 814 | 90.2 | 3.5 | Scheduled Maintenance | Below Target |
| 82 | 2026-03-23 | Unit 1 | Mechanical | 915 | 808 | 88.4 | 2.6 | Quality Check | Below Target |
| 83 | 2026-03-24 | Unit 1 | Mechanical | 995 | 917 | 92.2 | 4.4 | Equipment Failure | Below Target |
| 84 | 2026-03-25 | Unit 1 | Mechanical | 947 | 648 | 68.5 | 3.3 | Shift Change Delay | Critical |
| 85 | 2026-03-26 | Unit 1 | Mechanical | 988 | 767 | 77.7 | 4.6 | Equipment Failure | Critical |
| 86 | 2026-03-27 | Unit 1 | Mechanical | 915 | 602 | 65.9 | 3.2 | Shift Change Delay | Critical |
| 87 | 2026-03-28 | Unit 1 | Mechanical | 981 | 833 | 85.0 | 1.4 | None | Below Target |
| 88 | 2026-03-29 | Unit 1 | Mechanical | 998 | 956 | 95.8 | 5.2 | Equipment Failure | On Target |
| 89 | 2026-03-30 | Unit 1 | Mechanical | 938 | 824 | 87.9 | 2.3 | Scheduled Maintenance | Below Target |
| 90 | 2026-03-31 | Unit 1 | Mechanical | 928 | 666 | 71.8 | 4.6 | Raw Material Shortage | Critical |
| 91 | 2026-04-01 | Unit 1 | Mechanical | 919 | 872 | 95.0 | 3.5 | Quality Check | Below Target |
| 92 | 2026-04-02 | Unit 1 | Mechanical | 928 | 811 | 87.4 | 3.9 | Shift Change Delay | Below Target |
| 93 | 2026-04-03 | Unit 1 | Mechanical | 966 | 667 | 69.1 | 1.7 | None | Critical |
| 94 | 2026-04-04 | Unit 1 | Mechanical | 990 | 849 | 85.8 | 1.0 | None | Below Target |
| 95 | 2026-04-05 | Unit 1 | Mechanical | 906 | 892 | 98.5 | 2.2 | Shift Change Delay | On Target |
| 96 | 2026-04-06 | Unit 1 | Mechanical | 993 | 888 | 89.4 | 3.6 | Scheduled Maintenance | Below Target |
| 97 | 2026-04-07 | Unit 1 | Mechanical | 917 | 601 | 65.6 | 2.2 | Quality Check | Critical |
| 98 | 2026-04-08 | Unit 1 | Mechanical | 959 | 791 | 82.5 | 5.9 | Raw Material Shortage | Below Target |
| 99 | 2026-04-09 | Unit 1 | Mechanical | 936 | 723 | 77.3 | 5.3 | Equipment Failure | Critical |
| 100 | 2026-04-10 | Unit 1 | Mechanical | 940 | 655 | 69.8 | 2.6 | Scheduled Maintenance | Critical |
| 101 | 2026-04-11 | Unit 1 | Mechanical | 914 | 881 | 96.4 | 2.9 | Quality Check | On Target |
| 102 | 2026-04-12 | Unit 1 | Mechanical | 921 | 658 | 71.5 | 2.9 | Shift Change Delay | Critical |
| 103 | 2026-04-13 | Unit 1 | Mechanical | 974 | 909 | 93.4 | 4.6 | Raw Material Shortage | Below Target |
| 104 | 2026-04-14 | Unit 1 | Mechanical | 925 | 670 | 72.5 | 4.2 | Raw Material Shortage | Critical |
| 105 | 2026-04-15 | Unit 1 | Mechanical | 901 | 738 | 82.0 | 0.5 | None | Below Target |
| 106 | 2026-04-16 | Unit 1 | Mechanical | 985 | 815 | 82.7 | 1.2 | None | Below Target |
| 107 | 2026-04-17 | Unit 1 | Mechanical | 977 | 729 | 74.7 | 0.4 | None | Critical |
| 108 | 2026-04-18 | Unit 1 | Mechanical | 988 | 681 | 69.0 | 0.7 | None | Critical |
| 109 | 2026-04-19 | Unit 1 | Mechanical | 987 | 912 | 92.4 | 0.0 | None | Below Target |
| 110 | 2026-04-20 | Unit 1 | Mechanical | 953 | 641 | 67.3 | 2.8 | Shift Change Delay | Critical |
| 111 | 2026-04-21 | Unit 1 | Mechanical | 977 | 840 | 86.1 | 4.4 | Power Outage | Below Target |
| 112 | 2026-04-22 | Unit 1 | Mechanical | 944 | 892 | 94.6 | 1.2 | None | Below Target |
| 113 | 2026-04-23 | Unit 1 | Mechanical | 904 | 853 | 94.4 | 3.7 | Shift Change Delay | Below Target |
| 114 | 2026-04-24 | Unit 1 | Mechanical | 934 | 885 | 94.8 | 4.5 | Raw Material Shortage | Below Target |
| 115 | 2026-04-25 | Unit 1 | Mechanical | 912 | 783 | 85.9 | 4.0 | Scheduled Maintenance | Below Target |
| 116 | 2026-04-26 | Unit 1 | Mechanical | 937 | 919 | 98.1 | 5.8 | Equipment Failure | On Target |
| 117 | 2026-04-27 | Unit 1 | Mechanical | 964 | 648 | 67.2 | 1.6 | None | Critical |
| 118 | 2026-04-28 | Unit 1 | Mechanical | 946 | 671 | 71.0 | 2.7 | Scheduled Maintenance | Critical |
| 119 | 2026-04-29 | Unit 1 | Mechanical | 971 | 677 | 69.8 | 5.3 | Raw Material Shortage | Critical |
| 120 | 2026-04-30 | Unit 1 | Mechanical | 943 | 759 | 80.5 | 4.1 | Raw Material Shortage | Below Target |
| 121 | 2026-05-01 | Unit 1 | Mechanical | 920 | 714 | 77.6 | 0.0 | None | Critical |
| 122 | 2026-05-02 | Unit 1 | Mechanical | 928 | 856 | 92.3 | 2.7 | Scheduled Maintenance | Below Target |
| 123 | 2026-05-03 | Unit 1 | Mechanical | 900 | 793 | 88.2 | 4.0 | Shift Change Delay | Below Target |
| 124 | 2026-05-04 | Unit 1 | Mechanical | 943 | 797 | 84.6 | 5.6 | Raw Material Shortage | Below Target |
| 125 | 2026-05-05 | Unit 1 | Mechanical | 926 | 825 | 89.1 | 3.3 | Quality Check | Below Target |
| 126 | 2026-05-06 | Unit 1 | Mechanical | 928 | 658 | 70.9 | 4.1 | Power Outage | Critical |
| 127 | 2026-05-07 | Unit 1 | Mechanical | 998 | 878 | 88.0 | 1.7 | None | Below Target |
| 128 | 2026-05-08 | Unit 1 | Mechanical | 947 | 758 | 80.1 | 5.3 | Equipment Failure | Below Target |
| 129 | 2026-05-09 | Unit 1 | Mechanical | 941 | 686 | 72.9 | 2.4 | Scheduled Maintenance | Critical |
| 130 | 2026-05-10 | Unit 1 | Mechanical | 973 | 855 | 88.0 | 4.6 | Raw Material Shortage | Below Target |
| 131 | 2026-05-11 | Unit 1 | Mechanical | 917 | 812 | 88.6 | 5.9 | Power Outage | Below Target |
| 132 | 2026-05-12 | Unit 1 | Mechanical | 937 | 614 | 65.6 | 2.0 | None | Critical |
| 133 | 2026-05-13 | Unit 1 | Mechanical | 909 | 745 | 82.0 | 4.9 | Raw Material Shortage | Below Target |
| 134 | 2026-05-14 | Unit 1 | Mechanical | 929 | 717 | 77.2 | 2.7 | Scheduled Maintenance | Critical |
| 135 | 2026-05-15 | Unit 1 | Mechanical | 988 | 798 | 80.9 | 1.1 | None | Below Target |
| 136 | 2026-05-16 | Unit 1 | Mechanical | 934 | 868 | 93.0 | 3.7 | Scheduled Maintenance | Below Target |
| 137 | 2026-05-17 | Unit 1 | Mechanical | 912 | 725 | 79.5 | 0.0 | None | Critical |
| 138 | 2026-05-18 | Unit 1 | Mechanical | 920 | 825 | 89.7 | 1.4 | None | Below Target |
| 139 | 2026-05-19 | Unit 1 | Mechanical | 923 | 621 | 67.4 | 1.0 | None | Critical |
| 140 | 2026-05-20 | Unit 1 | Mechanical | 912 | 597 | 65.5 | 1.7 | None | Critical |
| 141 | 2026-05-21 | Unit 1 | Mechanical | 959 | 825 | 86.0 | 4.7 | Raw Material Shortage | Below Target |
| 142 | 2026-05-22 | Unit 1 | Mechanical | 969 | 932 | 96.2 | 0.2 | None | On Target |
| 143 | 2026-05-23 | Unit 1 | Mechanical | 994 | 897 | 90.3 | 5.5 | Power Outage | Below Target |
| 144 | 2026-05-24 | Unit 1 | Mechanical | 977 | 750 | 76.8 | 5.2 | Power Outage | Critical |
| 145 | 2026-05-25 | Unit 1 | Mechanical | 986 | 716 | 72.7 | 2.3 | Scheduled Maintenance | Critical |
| 146 | 2026-05-26 | Unit 1 | Mechanical | 994 | 708 | 71.3 | 5.4 | Raw Material Shortage | Critical |
| 147 | 2026-05-27 | Unit 1 | Mechanical | 997 | 912 | 91.5 | 0.6 | None | Below Target |
| 148 | 2026-05-28 | Unit 1 | Mechanical | 997 | 968 | 97.1 | 0.0 | None | On Target |
| 149 | 2026-05-29 | Unit 1 | Mechanical | 995 | 858 | 86.2 | 5.9 | Raw Material Shortage | Below Target |
| 150 | 2026-05-30 | Unit 1 | Mechanical | 977 | 946 | 96.9 | 4.0 | Scheduled Maintenance | On Target |
| 151 | 2026-01-01 | Unit 2 | Operations | 908 | 807 | 88.9 | 0.2 | None | Below Target |
| 152 | 2026-01-02 | Unit 2 | Operations | 984 | 693 | 70.5 | 4.7 | Power Outage | Critical |
| 153 | 2026-01-03 | Unit 2 | Operations | 935 | 660 | 70.7 | 3.3 | Shift Change Delay | Critical |
| 154 | 2026-01-04 | Unit 2 | Operations | 953 | 711 | 74.7 | 4.0 | Shift Change Delay | Critical |
| 155 | 2026-01-05 | Unit 2 | Operations | 974 | 782 | 80.4 | 2.7 | Quality Check | Below Target |
| 156 | 2026-01-06 | Unit 2 | Operations | 933 | 918 | 98.4 | 4.3 | Power Outage | On Target |
| 157 | 2026-01-07 | Unit 2 | Operations | 933 | 649 | 69.6 | 0.4 | None | Critical |
| 158 | 2026-01-08 | Unit 2 | Operations | 987 | 743 | 75.3 | 5.5 | Power Outage | Critical |
| 159 | 2026-01-09 | Unit 2 | Operations | 979 | 698 | 71.4 | 3.5 | Scheduled Maintenance | Critical |
| 160 | 2026-01-10 | Unit 2 | Operations | 944 | 810 | 85.8 | 5.0 | Equipment Failure | Below Target |
| 161 | 2026-01-11 | Unit 2 | Operations | 912 | 657 | 72.1 | 3.2 | Quality Check | Critical |
| 162 | 2026-01-12 | Unit 2 | Operations | 979 | 695 | 71.0 | 2.7 | Scheduled Maintenance | Critical |
| 163 | 2026-01-13 | Unit 2 | Operations | 952 | 665 | 69.9 | 5.8 | Raw Material Shortage | Critical |
| 164 | 2026-01-14 | Unit 2 | Operations | 956 | 845 | 88.4 | 2.1 | Scheduled Maintenance | Below Target |
| 165 | 2026-01-15 | Unit 2 | Operations | 990 | 791 | 79.9 | 4.0 | Shift Change Delay | Critical |
| 166 | 2026-01-16 | Unit 2 | Operations | 927 | 789 | 85.2 | 4.4 | Raw Material Shortage | Below Target |
| 167 | 2026-01-17 | Unit 2 | Operations | 987 | 947 | 96.0 | 0.9 | None | On Target |
| 168 | 2026-01-18 | Unit 2 | Operations | 902 | 835 | 92.6 | 1.1 | None | Below Target |
| 169 | 2026-01-19 | Unit 2 | Operations | 982 | 682 | 69.5 | 3.5 | Shift Change Delay | Critical |
| 170 | 2026-01-20 | Unit 2 | Operations | 900 | 652 | 72.6 | 5.5 | Raw Material Shortage | Critical |
| 171 | 2026-01-21 | Unit 2 | Operations | 968 | 929 | 96.0 | 4.1 | Raw Material Shortage | On Target |
| 172 | 2026-01-22 | Unit 2 | Operations | 974 | 897 | 92.1 | 1.3 | None | Below Target |
| 173 | 2026-01-23 | Unit 2 | Operations | 958 | 664 | 69.3 | 3.2 | Shift Change Delay | Critical |
| 174 | 2026-01-24 | Unit 2 | Operations | 976 | 772 | 79.1 | 1.1 | None | Critical |
| 175 | 2026-01-25 | Unit 2 | Operations | 970 | 927 | 95.6 | 3.5 | Shift Change Delay | On Target |
| 176 | 2026-01-26 | Unit 2 | Operations | 915 | 783 | 85.7 | 4.4 | Raw Material Shortage | Below Target |
| 177 | 2026-01-27 | Unit 2 | Operations | 966 | 635 | 65.8 | 3.3 | Shift Change Delay | Critical |
| 178 | 2026-01-28 | Unit 2 | Operations | 983 | 711 | 72.4 | 5.4 | Power Outage | Critical |
| 179 | 2026-01-29 | Unit 2 | Operations | 938 | 770 | 82.1 | 1.0 | None | Below Target |
| 180 | 2026-01-30 | Unit 2 | Operations | 953 | 882 | 92.6 | 2.8 | Scheduled Maintenance | Below Target |
| 181 | 2026-01-31 | Unit 2 | Operations | 931 | 626 | 67.3 | 3.7 | Scheduled Maintenance | Critical |
| 182 | 2026-02-01 | Unit 2 | Operations | 901 | 794 | 88.2 | 0.2 | None | Below Target |
| 183 | 2026-02-02 | Unit 2 | Operations | 956 | 840 | 87.9 | 3.3 | Scheduled Maintenance | Below Target |
| 184 | 2026-02-03 | Unit 2 | Operations | 948 | 778 | 82.1 | 5.0 | Power Outage | Below Target |
| 185 | 2026-02-04 | Unit 2 | Operations | 985 | 841 | 85.4 | 5.0 | Raw Material Shortage | Below Target |
| 186 | 2026-02-05 | Unit 2 | Operations | 983 | 856 | 87.2 | 4.9 | Equipment Failure | Below Target |
| 187 | 2026-02-06 | Unit 2 | Operations | 928 | 890 | 96.0 | 2.9 | Quality Check | On Target |
| 188 | 2026-02-07 | Unit 2 | Operations | 980 | 925 | 94.4 | 4.8 | Raw Material Shortage | Below Target |
| 189 | 2026-02-08 | Unit 2 | Operations | 999 | 920 | 92.1 | 5.2 | Power Outage | Below Target |
| 190 | 2026-02-09 | Unit 2 | Operations | 966 | 749 | 77.6 | 1.7 | None | Critical |
| 191 | 2026-02-10 | Unit 2 | Operations | 924 | 860 | 93.2 | 2.0 | None | Below Target |
| 192 | 2026-02-11 | Unit 2 | Operations | 945 | 626 | 66.3 | 1.7 | None | Critical |
| 193 | 2026-02-12 | Unit 2 | Operations | 976 | 649 | 66.5 | 5.5 | Equipment Failure | Critical |
| 194 | 2026-02-13 | Unit 2 | Operations | 965 | 659 | 68.4 | 3.7 | Scheduled Maintenance | Critical |
| 195 | 2026-02-14 | Unit 2 | Operations | 997 | 851 | 85.4 | 1.8 | None | Below Target |
| 196 | 2026-02-15 | Unit 2 | Operations | 958 | 855 | 89.3 | 3.9 | Scheduled Maintenance | Below Target |
| 197 | 2026-02-16 | Unit 2 | Operations | 999 | 685 | 68.6 | 2.4 | Scheduled Maintenance | Critical |
| 198 | 2026-02-17 | Unit 2 | Operations | 993 | 949 | 95.6 | 4.4 | Power Outage | On Target |
| 199 | 2026-02-18 | Unit 2 | Operations | 923 | 641 | 69.5 | 2.9 | Quality Check | Critical |
| 200 | 2026-02-19 | Unit 2 | Operations | 959 | 858 | 89.5 | 0.9 | None | Below Target |
| 201 | 2026-02-20 | Unit 2 | Operations | 912 | 807 | 88.5 | 2.7 | Quality Check | Below Target |
| 202 | 2026-02-21 | Unit 2 | Operations | 917 | 799 | 87.2 | 4.8 | Power Outage | Below Target |
| 203 | 2026-02-22 | Unit 2 | Operations | 936 | 843 | 90.1 | 2.4 | Quality Check | Below Target |
| 204 | 2026-02-23 | Unit 2 | Operations | 991 | 692 | 69.9 | 0.8 | None | Critical |
| 205 | 2026-02-24 | Unit 2 | Operations | 992 | 880 | 88.8 | 6.0 | Equipment Failure | Below Target |
| 206 | 2026-02-25 | Unit 2 | Operations | 919 | 845 | 92.0 | 0.7 | None | Below Target |
| 207 | 2026-02-26 | Unit 2 | Operations | 941 | 652 | 69.4 | 1.2 | None | Critical |
| 208 | 2026-02-27 | Unit 2 | Operations | 992 | 915 | 92.3 | 2.6 | Quality Check | Below Target |
| 209 | 2026-02-28 | Unit 2 | Operations | 985 | 655 | 66.6 | 0.7 | None | Critical |
| 210 | 2026-03-01 | Unit 2 | Operations | 988 | 935 | 94.7 | 1.1 | None | Below Target |
| 211 | 2026-03-02 | Unit 2 | Operations | 998 | 824 | 82.6 | 4.4 | Equipment Failure | Below Target |
| 212 | 2026-03-03 | Unit 2 | Operations | 944 | 771 | 81.8 | 2.5 | Shift Change Delay | Below Target |
| 213 | 2026-03-04 | Unit 2 | Operations | 922 | 652 | 70.8 | 5.5 | Raw Material Shortage | Critical |
| 214 | 2026-03-05 | Unit 2 | Operations | 946 | 893 | 94.5 | 4.5 | Raw Material Shortage | Below Target |
| 215 | 2026-03-06 | Unit 2 | Operations | 924 | 766 | 82.9 | 1.6 | None | Below Target |
| 216 | 2026-03-07 | Unit 2 | Operations | 962 | 855 | 88.9 | 2.7 | Shift Change Delay | Below Target |
| 217 | 2026-03-08 | Unit 2 | Operations | 966 | 869 | 90.0 | 2.0 | None | Below Target |
| 218 | 2026-03-09 | Unit 2 | Operations | 983 | 925 | 94.2 | 3.9 | Scheduled Maintenance | Below Target |
| 219 | 2026-03-10 | Unit 2 | Operations | 941 | 754 | 80.2 | 4.7 | Equipment Failure | Below Target |
| 220 | 2026-03-11 | Unit 2 | Operations | 951 | 833 | 87.7 | 4.5 | Raw Material Shortage | Below Target |
| 221 | 2026-03-12 | Unit 2 | Operations | 940 | 613 | 65.3 | 4.0 | Shift Change Delay | Critical |
| 222 | 2026-03-13 | Unit 2 | Operations | 931 | 846 | 91.0 | 5.8 | Equipment Failure | Below Target |
| 223 | 2026-03-14 | Unit 2 | Operations | 991 | 699 | 70.6 | 3.3 | Scheduled Maintenance | Critical |
| 224 | 2026-03-15 | Unit 2 | Operations | 921 | 726 | 78.8 | 4.6 | Equipment Failure | Critical |
| 225 | 2026-03-16 | Unit 2 | Operations | 981 | 723 | 73.7 | 2.3 | Scheduled Maintenance | Critical |
| 226 | 2026-03-17 | Unit 2 | Operations | 959 | 922 | 96.2 | 1.7 | None | On Target |
| 227 | 2026-03-18 | Unit 2 | Operations | 964 | 769 | 79.8 | 4.1 | Raw Material Shortage | Critical |
| 228 | 2026-03-19 | Unit 2 | Operations | 937 | 807 | 86.2 | 0.6 | None | Below Target |
| 229 | 2026-03-20 | Unit 2 | Operations | 959 | 788 | 82.3 | 2.3 | Quality Check | Below Target |
| 230 | 2026-03-21 | Unit 2 | Operations | 964 | 706 | 73.3 | 2.7 | Quality Check | Critical |
| 231 | 2026-03-22 | Unit 2 | Operations | 991 | 848 | 85.6 | 1.8 | None | Below Target |
| 232 | 2026-03-23 | Unit 2 | Operations | 985 | 937 | 95.2 | 2.4 | Shift Change Delay | On Target |
| 233 | 2026-03-24 | Unit 2 | Operations | 933 | 638 | 68.4 | 2.5 | Quality Check | Critical |
| 234 | 2026-03-25 | Unit 2 | Operations | 999 | 984 | 98.6 | 2.0 | None | On Target |
| 235 | 2026-03-26 | Unit 2 | Operations | 927 | 703 | 75.9 | 1.0 | None | Critical |
| 236 | 2026-03-27 | Unit 2 | Operations | 977 | 829 | 84.9 | 3.7 | Quality Check | Below Target |
| 237 | 2026-03-28 | Unit 2 | Operations | 904 | 776 | 85.9 | 2.8 | Quality Check | Below Target |
| 238 | 2026-03-29 | Unit 2 | Operations | 977 | 943 | 96.6 | 0.1 | None | On Target |
| 239 | 2026-03-30 | Unit 2 | Operations | 900 | 873 | 97.0 | 5.5 | Raw Material Shortage | On Target |
| 240 | 2026-03-31 | Unit 2 | Operations | 991 | 915 | 92.3 | 1.0 | None | Below Target |
| 241 | 2026-04-01 | Unit 2 | Operations | 930 | 763 | 82.1 | 1.5 | None | Below Target |
| 242 | 2026-04-02 | Unit 2 | Operations | 952 | 728 | 76.5 | 1.4 | None | Critical |
| 243 | 2026-04-03 | Unit 2 | Operations | 919 | 888 | 96.7 | 2.0 | None | On Target |
| 244 | 2026-04-04 | Unit 2 | Operations | 920 | 851 | 92.6 | 3.0 | Scheduled Maintenance | Below Target |
| 245 | 2026-04-05 | Unit 2 | Operations | 959 | 784 | 81.8 | 3.4 | Shift Change Delay | Below Target |
| 246 | 2026-04-06 | Unit 2 | Operations | 917 | 838 | 91.5 | 5.1 | Equipment Failure | Below Target |
| 247 | 2026-04-07 | Unit 2 | Operations | 941 | 800 | 85.0 | 0.5 | None | Below Target |
| 248 | 2026-04-08 | Unit 2 | Operations | 906 | 755 | 83.4 | 4.7 | Power Outage | Below Target |
| 249 | 2026-04-09 | Unit 2 | Operations | 974 | 726 | 74.6 | 2.7 | Quality Check | Critical |
| 250 | 2026-04-10 | Unit 2 | Operations | 971 | 954 | 98.3 | 5.3 | Raw Material Shortage | On Target |
| 251 | 2026-04-11 | Unit 2 | Operations | 991 | 835 | 84.3 | 4.9 | Equipment Failure | Below Target |
| 252 | 2026-04-12 | Unit 2 | Operations | 938 | 671 | 71.6 | 2.9 | Shift Change Delay | Critical |
| 253 | 2026-04-13 | Unit 2 | Operations | 943 | 660 | 70.0 | 4.3 | Equipment Failure | Critical |
| 254 | 2026-04-14 | Unit 2 | Operations | 949 | 764 | 80.6 | 4.2 | Raw Material Shortage | Below Target |
| 255 | 2026-04-15 | Unit 2 | Operations | 905 | 743 | 82.2 | 4.2 | Power Outage | Below Target |
| 256 | 2026-04-16 | Unit 2 | Operations | 968 | 850 | 87.8 | 2.2 | Shift Change Delay | Below Target |
| 257 | 2026-04-17 | Unit 2 | Operations | 992 | 772 | 77.8 | 5.9 | Raw Material Shortage | Critical |
| 258 | 2026-04-18 | Unit 2 | Operations | 917 | 852 | 93.0 | 0.7 | None | Below Target |
| 259 | 2026-04-19 | Unit 2 | Operations | 935 | 865 | 92.5 | 4.5 | Equipment Failure | Below Target |
| 260 | 2026-04-20 | Unit 2 | Operations | 926 | 806 | 87.1 | 5.5 | Equipment Failure | Below Target |
| 261 | 2026-04-21 | Unit 2 | Operations | 951 | 938 | 98.6 | 5.0 | Equipment Failure | On Target |
| 262 | 2026-04-22 | Unit 2 | Operations | 955 | 916 | 96.0 | 3.4 | Quality Check | On Target |
| 263 | 2026-04-23 | Unit 2 | Operations | 937 | 708 | 75.6 | 0.2 | None | Critical |
| 264 | 2026-04-24 | Unit 2 | Operations | 906 | 760 | 83.9 | 1.9 | None | Below Target |
| 265 | 2026-04-25 | Unit 2 | Operations | 964 | 646 | 67.1 | 5.8 | Raw Material Shortage | Critical |
| 266 | 2026-04-26 | Unit 2 | Operations | 977 | 756 | 77.4 | 1.2 | None | Critical |
| 267 | 2026-04-27 | Unit 2 | Operations | 910 | 777 | 85.4 | 0.4 | None | Below Target |
| 268 | 2026-04-28 | Unit 2 | Operations | 986 | 954 | 96.8 | 1.3 | None | On Target |
| 269 | 2026-04-29 | Unit 2 | Operations | 957 | 945 | 98.8 | 3.0 | Scheduled Maintenance | On Target |
| 270 | 2026-04-30 | Unit 2 | Operations | 965 | 716 | 74.3 | 5.7 | Power Outage | Critical |
| 271 | 2026-05-01 | Unit 2 | Operations | 901 | 708 | 78.7 | 4.2 | Power Outage | Critical |
| 272 | 2026-05-02 | Unit 2 | Operations | 964 | 845 | 87.8 | 1.6 | None | Below Target |
| 273 | 2026-05-03 | Unit 2 | Operations | 915 | 685 | 74.9 | 6.0 | Equipment Failure | Critical |
| 274 | 2026-05-04 | Unit 2 | Operations | 930 | 845 | 90.9 | 5.1 | Power Outage | Below Target |
| 275 | 2026-05-05 | Unit 2 | Operations | 948 | 720 | 76.0 | 3.0 | Shift Change Delay | Critical |
| 276 | 2026-05-06 | Unit 2 | Operations | 993 | 846 | 85.2 | 1.4 | None | Below Target |
| 277 | 2026-05-07 | Unit 2 | Operations | 934 | 709 | 75.9 | 4.8 | Raw Material Shortage | Critical |
| 278 | 2026-05-08 | Unit 2 | Operations | 934 | 778 | 83.3 | 3.2 | Shift Change Delay | Below Target |
| 279 | 2026-05-09 | Unit 2 | Operations | 934 | 674 | 72.2 | 1.2 | None | Critical |
| 280 | 2026-05-10 | Unit 2 | Operations | 922 | 780 | 84.6 | 5.6 | Equipment Failure | Below Target |
| 281 | 2026-05-11 | Unit 2 | Operations | 906 | 606 | 66.9 | 3.6 | Scheduled Maintenance | Critical |
| 282 | 2026-05-12 | Unit 2 | Operations | 957 | 885 | 92.5 | 4.2 | Power Outage | Below Target |
| 283 | 2026-05-13 | Unit 2 | Operations | 907 | 618 | 68.1 | 2.5 | Shift Change Delay | Critical |
| 284 | 2026-05-14 | Unit 2 | Operations | 948 | 651 | 68.8 | 3.4 | Shift Change Delay | Critical |
| 285 | 2026-05-15 | Unit 2 | Operations | 971 | 876 | 90.2 | 3.9 | Shift Change Delay | Below Target |
| 286 | 2026-05-16 | Unit 2 | Operations | 907 | 843 | 93.0 | 5.1 | Power Outage | Below Target |
| 287 | 2026-05-17 | Unit 2 | Operations | 976 | 857 | 87.9 | 0.5 | None | Below Target |
| 288 | 2026-05-18 | Unit 2 | Operations | 989 | 885 | 89.5 | 2.9 | Shift Change Delay | Below Target |
| 289 | 2026-05-19 | Unit 2 | Operations | 913 | 676 | 74.1 | 1.5 | None | Critical |
| 290 | 2026-05-20 | Unit 2 | Operations | 966 | 824 | 85.3 | 1.4 | None | Below Target |
| 291 | 2026-05-21 | Unit 2 | Operations | 997 | 967 | 97.1 | 2.0 | None | On Target |
| 292 | 2026-05-22 | Unit 2 | Operations | 920 | 846 | 92.0 | 2.3 | Quality Check | Below Target |
| 293 | 2026-05-23 | Unit 2 | Operations | 976 | 649 | 66.5 | 3.8 | Shift Change Delay | Critical |
| 294 | 2026-05-24 | Unit 2 | Operations | 950 | 934 | 98.4 | 0.6 | None | On Target |
| 295 | 2026-05-25 | Unit 2 | Operations | 949 | 699 | 73.7 | 2.3 | Shift Change Delay | Critical |
| 296 | 2026-05-26 | Unit 2 | Operations | 906 | 641 | 70.8 | 0.4 | None | Critical |
| 297 | 2026-05-27 | Unit 2 | Operations | 967 | 634 | 65.6 | 1.5 | None | Critical |
| 298 | 2026-05-28 | Unit 2 | Operations | 962 | 930 | 96.8 | 0.6 | None | On Target |
| 299 | 2026-05-29 | Unit 2 | Operations | 920 | 614 | 66.8 | 2.4 | Scheduled Maintenance | Critical |
| 300 | 2026-05-30 | Unit 2 | Operations | 903 | 890 | 98.6 | 3.8 | Shift Change Delay | On Target |
| 301 | 2026-01-01 | Unit 3 | Steel R&D | 910 | 842 | 92.6 | 3.6 | Quality Check | Below Target |
| 302 | 2026-01-02 | Unit 3 | Steel R&D | 981 | 870 | 88.8 | 4.0 | Quality Check | Below Target |
| 303 | 2026-01-03 | Unit 3 | Steel R&D | 961 | 693 | 72.2 | 1.3 | None | Critical |
| 304 | 2026-01-04 | Unit 3 | Steel R&D | 963 | 732 | 76.0 | 5.9 | Power Outage | Critical |
| 305 | 2026-01-05 | Unit 3 | Steel R&D | 915 | 839 | 91.7 | 3.8 | Quality Check | Below Target |
| 306 | 2026-01-06 | Unit 3 | Steel R&D | 965 | 801 | 83.1 | 5.7 | Power Outage | Below Target |
| 307 | 2026-01-07 | Unit 3 | Steel R&D | 941 | 649 | 69.0 | 5.1 | Equipment Failure | Critical |
| 308 | 2026-01-08 | Unit 3 | Steel R&D | 969 | 643 | 66.5 | 0.2 | None | Critical |
| 309 | 2026-01-09 | Unit 3 | Steel R&D | 966 | 818 | 84.8 | 1.1 | None | Below Target |
| 310 | 2026-01-10 | Unit 3 | Steel R&D | 963 | 896 | 93.1 | 3.4 | Quality Check | Below Target |
| 311 | 2026-01-11 | Unit 3 | Steel R&D | 948 | 665 | 70.2 | 5.4 | Raw Material Shortage | Critical |
| 312 | 2026-01-12 | Unit 3 | Steel R&D | 955 | 875 | 91.7 | 2.4 | Scheduled Maintenance | Below Target |
| 313 | 2026-01-13 | Unit 3 | Steel R&D | 913 | 736 | 80.7 | 4.4 | Equipment Failure | Below Target |
| 314 | 2026-01-14 | Unit 3 | Steel R&D | 991 | 784 | 79.1 | 4.2 | Power Outage | Critical |
| 315 | 2026-01-15 | Unit 3 | Steel R&D | 999 | 687 | 68.8 | 3.5 | Quality Check | Critical |
| 316 | 2026-01-16 | Unit 3 | Steel R&D | 997 | 655 | 65.8 | 5.4 | Equipment Failure | Critical |
| 317 | 2026-01-17 | Unit 3 | Steel R&D | 970 | 744 | 76.7 | 0.0 | None | Critical |
| 318 | 2026-01-18 | Unit 3 | Steel R&D | 943 | 870 | 92.3 | 6.0 | Equipment Failure | Below Target |
| 319 | 2026-01-19 | Unit 3 | Steel R&D | 927 | 692 | 74.7 | 5.9 | Equipment Failure | Critical |
| 320 | 2026-01-20 | Unit 3 | Steel R&D | 994 | 895 | 90.1 | 4.0 | Quality Check | Below Target |
| 321 | 2026-01-21 | Unit 3 | Steel R&D | 955 | 673 | 70.5 | 1.6 | None | Critical |
| 322 | 2026-01-22 | Unit 3 | Steel R&D | 904 | 800 | 88.5 | 5.6 | Equipment Failure | Below Target |
| 323 | 2026-01-23 | Unit 3 | Steel R&D | 989 | 752 | 76.1 | 0.5 | None | Critical |
| 324 | 2026-01-24 | Unit 3 | Steel R&D | 996 | 674 | 67.7 | 5.8 | Raw Material Shortage | Critical |
| 325 | 2026-01-25 | Unit 3 | Steel R&D | 906 | 704 | 77.8 | 3.8 | Quality Check | Critical |
| 326 | 2026-01-26 | Unit 3 | Steel R&D | 980 | 762 | 77.8 | 0.0 | None | Critical |
| 327 | 2026-01-27 | Unit 3 | Steel R&D | 921 | 775 | 84.2 | 0.1 | None | Below Target |
| 328 | 2026-01-28 | Unit 3 | Steel R&D | 986 | 855 | 86.8 | 2.8 | Shift Change Delay | Below Target |
| 329 | 2026-01-29 | Unit 3 | Steel R&D | 919 | 629 | 68.5 | 2.9 | Shift Change Delay | Critical |
| 330 | 2026-01-30 | Unit 3 | Steel R&D | 974 | 643 | 66.1 | 6.0 | Equipment Failure | Critical |
| 331 | 2026-01-31 | Unit 3 | Steel R&D | 955 | 900 | 94.3 | 4.4 | Power Outage | Below Target |
| 332 | 2026-02-01 | Unit 3 | Steel R&D | 978 | 872 | 89.2 | 2.3 | Shift Change Delay | Below Target |
| 333 | 2026-02-02 | Unit 3 | Steel R&D | 978 | 734 | 75.1 | 3.5 | Shift Change Delay | Critical |
| 334 | 2026-02-03 | Unit 3 | Steel R&D | 997 | 908 | 91.1 | 1.0 | None | Below Target |
| 335 | 2026-02-04 | Unit 3 | Steel R&D | 903 | 794 | 88.0 | 1.6 | None | Below Target |
| 336 | 2026-02-05 | Unit 3 | Steel R&D | 983 | 728 | 74.1 | 3.9 | Scheduled Maintenance | Critical |
| 337 | 2026-02-06 | Unit 3 | Steel R&D | 938 | 917 | 97.8 | 1.6 | None | On Target |
| 338 | 2026-02-07 | Unit 3 | Steel R&D | 914 | 753 | 82.4 | 5.6 | Power Outage | Below Target |
| 339 | 2026-02-08 | Unit 3 | Steel R&D | 909 | 834 | 91.8 | 4.9 | Power Outage | Below Target |
| 340 | 2026-02-09 | Unit 3 | Steel R&D | 984 | 701 | 71.3 | 2.6 | Scheduled Maintenance | Critical |
| 341 | 2026-02-10 | Unit 3 | Steel R&D | 960 | 675 | 70.4 | 1.0 | None | Critical |
| 342 | 2026-02-11 | Unit 3 | Steel R&D | 973 | 804 | 82.7 | 3.1 | Quality Check | Below Target |
| 343 | 2026-02-12 | Unit 3 | Steel R&D | 988 | 852 | 86.2 | 1.1 | None | Below Target |
| 344 | 2026-02-13 | Unit 3 | Steel R&D | 972 | 940 | 96.7 | 2.1 | Shift Change Delay | On Target |
| 345 | 2026-02-14 | Unit 3 | Steel R&D | 911 | 884 | 97.1 | 3.7 | Shift Change Delay | On Target |
| 346 | 2026-02-15 | Unit 3 | Steel R&D | 961 | 943 | 98.2 | 0.4 | None | On Target |
| 347 | 2026-02-16 | Unit 3 | Steel R&D | 933 | 648 | 69.5 | 3.8 | Quality Check | Critical |
| 348 | 2026-02-17 | Unit 3 | Steel R&D | 946 | 905 | 95.7 | 5.5 | Power Outage | On Target |
| 349 | 2026-02-18 | Unit 3 | Steel R&D | 964 | 740 | 76.8 | 2.5 | Scheduled Maintenance | Critical |
| 350 | 2026-02-19 | Unit 3 | Steel R&D | 948 | 768 | 81.1 | 0.8 | None | Below Target |
| 351 | 2026-02-20 | Unit 3 | Steel R&D | 908 | 740 | 81.6 | 4.3 | Raw Material Shortage | Below Target |
| 352 | 2026-02-21 | Unit 3 | Steel R&D | 952 | 622 | 65.4 | 4.5 | Raw Material Shortage | Critical |
| 353 | 2026-02-22 | Unit 3 | Steel R&D | 990 | 644 | 65.1 | 3.8 | Shift Change Delay | Critical |
| 354 | 2026-02-23 | Unit 3 | Steel R&D | 918 | 786 | 85.6 | 0.9 | None | Below Target |
| 355 | 2026-02-24 | Unit 3 | Steel R&D | 901 | 700 | 77.8 | 5.7 | Power Outage | Critical |
| 356 | 2026-02-25 | Unit 3 | Steel R&D | 980 | 868 | 88.6 | 4.2 | Raw Material Shortage | Below Target |
| 357 | 2026-02-26 | Unit 3 | Steel R&D | 922 | 697 | 75.7 | 3.5 | Shift Change Delay | Critical |
| 358 | 2026-02-27 | Unit 3 | Steel R&D | 955 | 851 | 89.1 | 4.7 | Raw Material Shortage | Below Target |
| 359 | 2026-02-28 | Unit 3 | Steel R&D | 901 | 776 | 86.2 | 3.6 | Shift Change Delay | Below Target |
| 360 | 2026-03-01 | Unit 3 | Steel R&D | 911 | 876 | 96.2 | 5.1 | Raw Material Shortage | On Target |
| 361 | 2026-03-02 | Unit 3 | Steel R&D | 958 | 796 | 83.2 | 3.6 | Quality Check | Below Target |
| 362 | 2026-03-03 | Unit 3 | Steel R&D | 966 | 636 | 65.9 | 3.7 | Scheduled Maintenance | Critical |
| 363 | 2026-03-04 | Unit 3 | Steel R&D | 968 | 923 | 95.4 | 3.1 | Quality Check | On Target |
| 364 | 2026-03-05 | Unit 3 | Steel R&D | 973 | 765 | 78.7 | 1.5 | None | Critical |
| 365 | 2026-03-06 | Unit 3 | Steel R&D | 968 | 903 | 93.3 | 5.4 | Equipment Failure | Below Target |
| 366 | 2026-03-07 | Unit 3 | Steel R&D | 960 | 725 | 75.5 | 4.5 | Power Outage | Critical |
| 367 | 2026-03-08 | Unit 3 | Steel R&D | 925 | 729 | 78.9 | 2.7 | Quality Check | Critical |
| 368 | 2026-03-09 | Unit 3 | Steel R&D | 980 | 854 | 87.2 | 5.0 | Raw Material Shortage | Below Target |
| 369 | 2026-03-10 | Unit 3 | Steel R&D | 908 | 802 | 88.4 | 3.5 | Shift Change Delay | Below Target |
| 370 | 2026-03-11 | Unit 3 | Steel R&D | 925 | 780 | 84.4 | 3.2 | Shift Change Delay | Below Target |
| 371 | 2026-03-12 | Unit 3 | Steel R&D | 918 | 687 | 74.9 | 5.9 | Equipment Failure | Critical |
| 372 | 2026-03-13 | Unit 3 | Steel R&D | 980 | 916 | 93.5 | 1.2 | None | Below Target |
| 373 | 2026-03-14 | Unit 3 | Steel R&D | 914 | 857 | 93.8 | 3.5 | Shift Change Delay | Below Target |
| 374 | 2026-03-15 | Unit 3 | Steel R&D | 925 | 732 | 79.1 | 2.6 | Shift Change Delay | Critical |
| 375 | 2026-03-16 | Unit 3 | Steel R&D | 924 | 811 | 87.8 | 4.9 | Raw Material Shortage | Below Target |
| 376 | 2026-03-17 | Unit 3 | Steel R&D | 914 | 790 | 86.5 | 3.9 | Scheduled Maintenance | Below Target |
| 377 | 2026-03-18 | Unit 3 | Steel R&D | 909 | 866 | 95.3 | 1.5 | None | On Target |
| 378 | 2026-03-19 | Unit 3 | Steel R&D | 978 | 864 | 88.4 | 5.2 | Power Outage | Below Target |
| 379 | 2026-03-20 | Unit 3 | Steel R&D | 909 | 629 | 69.3 | 4.6 | Raw Material Shortage | Critical |
| 380 | 2026-03-21 | Unit 3 | Steel R&D | 941 | 651 | 69.2 | 1.1 | None | Critical |
| 381 | 2026-03-22 | Unit 3 | Steel R&D | 971 | 805 | 82.9 | 3.2 | Scheduled Maintenance | Below Target |
| 382 | 2026-03-23 | Unit 3 | Steel R&D | 906 | 613 | 67.8 | 0.6 | None | Critical |
| 383 | 2026-03-24 | Unit 3 | Steel R&D | 932 | 734 | 78.8 | 1.5 | None | Critical |
| 384 | 2026-03-25 | Unit 3 | Steel R&D | 985 | 684 | 69.5 | 6.0 | Power Outage | Critical |
| 385 | 2026-03-26 | Unit 3 | Steel R&D | 937 | 924 | 98.6 | 0.7 | None | On Target |
| 386 | 2026-03-27 | Unit 3 | Steel R&D | 973 | 652 | 67.0 | 4.4 | Raw Material Shortage | Critical |
| 387 | 2026-03-28 | Unit 3 | Steel R&D | 956 | 936 | 98.0 | 2.9 | Quality Check | On Target |
| 388 | 2026-03-29 | Unit 3 | Steel R&D | 990 | 937 | 94.7 | 0.8 | None | Below Target |
| 389 | 2026-03-30 | Unit 3 | Steel R&D | 921 | 753 | 81.8 | 4.0 | Quality Check | Below Target |
| 390 | 2026-03-31 | Unit 3 | Steel R&D | 989 | 921 | 93.2 | 4.7 | Power Outage | Below Target |
| 391 | 2026-04-01 | Unit 3 | Steel R&D | 974 | 889 | 91.3 | 0.4 | None | Below Target |
| 392 | 2026-04-02 | Unit 3 | Steel R&D | 986 | 819 | 83.2 | 0.2 | None | Below Target |
| 393 | 2026-04-03 | Unit 3 | Steel R&D | 949 | 855 | 90.1 | 0.6 | None | Below Target |
| 394 | 2026-04-04 | Unit 3 | Steel R&D | 983 | 733 | 74.6 | 0.5 | None | Critical |
| 395 | 2026-04-05 | Unit 3 | Steel R&D | 922 | 645 | 70.0 | 4.1 | Power Outage | Critical |
| 396 | 2026-04-06 | Unit 3 | Steel R&D | 949 | 743 | 78.4 | 1.4 | None | Critical |
| 397 | 2026-04-07 | Unit 3 | Steel R&D | 992 | 790 | 79.6 | 1.2 | None | Critical |
| 398 | 2026-04-08 | Unit 3 | Steel R&D | 988 | 687 | 69.6 | 1.3 | None | Critical |
| 399 | 2026-04-09 | Unit 3 | Steel R&D | 952 | 620 | 65.2 | 1.0 | None | Critical |
| 400 | 2026-04-10 | Unit 3 | Steel R&D | 985 | 643 | 65.3 | 1.7 | None | Critical |
| 401 | 2026-04-11 | Unit 3 | Steel R&D | 919 | 644 | 70.2 | 0.1 | None | Critical |
| 402 | 2026-04-12 | Unit 3 | Steel R&D | 969 | 783 | 80.8 | 1.6 | None | Below Target |
| 403 | 2026-04-13 | Unit 3 | Steel R&D | 990 | 964 | 97.4 | 5.1 | Raw Material Shortage | On Target |
| 404 | 2026-04-14 | Unit 3 | Steel R&D | 928 | 797 | 86.0 | 5.8 | Power Outage | Below Target |
| 405 | 2026-04-15 | Unit 3 | Steel R&D | 969 | 690 | 71.3 | 4.7 | Raw Material Shortage | Critical |
| 406 | 2026-04-16 | Unit 3 | Steel R&D | 956 | 932 | 97.6 | 4.2 | Raw Material Shortage | On Target |
| 407 | 2026-04-17 | Unit 3 | Steel R&D | 999 | 964 | 96.6 | 2.3 | Scheduled Maintenance | On Target |
| 408 | 2026-04-18 | Unit 3 | Steel R&D | 961 | 833 | 86.7 | 5.9 | Equipment Failure | Below Target |
| 409 | 2026-04-19 | Unit 3 | Steel R&D | 952 | 900 | 94.6 | 4.0 | Scheduled Maintenance | Below Target |
| 410 | 2026-04-20 | Unit 3 | Steel R&D | 943 | 799 | 84.8 | 1.2 | None | Below Target |
| 411 | 2026-04-21 | Unit 3 | Steel R&D | 973 | 664 | 68.3 | 3.2 | Shift Change Delay | Critical |
| 412 | 2026-04-22 | Unit 3 | Steel R&D | 900 | 791 | 88.0 | 4.8 | Raw Material Shortage | Below Target |
| 413 | 2026-04-23 | Unit 3 | Steel R&D | 954 | 671 | 70.4 | 3.6 | Shift Change Delay | Critical |
| 414 | 2026-04-24 | Unit 3 | Steel R&D | 939 | 706 | 75.2 | 5.9 | Raw Material Shortage | Critical |
| 415 | 2026-04-25 | Unit 3 | Steel R&D | 949 | 621 | 65.5 | 5.1 | Power Outage | Critical |
| 416 | 2026-04-26 | Unit 3 | Steel R&D | 969 | 718 | 74.1 | 2.8 | Quality Check | Critical |
| 417 | 2026-04-27 | Unit 3 | Steel R&D | 973 | 950 | 97.7 | 4.4 | Power Outage | On Target |
| 418 | 2026-04-28 | Unit 3 | Steel R&D | 969 | 860 | 88.8 | 2.7 | Scheduled Maintenance | Below Target |
| 419 | 2026-04-29 | Unit 3 | Steel R&D | 943 | 887 | 94.1 | 0.4 | None | Below Target |
| 420 | 2026-04-30 | Unit 3 | Steel R&D | 997 | 853 | 85.6 | 0.1 | None | Below Target |
| 421 | 2026-05-01 | Unit 3 | Steel R&D | 900 | 714 | 79.3 | 2.7 | Shift Change Delay | Critical |
| 422 | 2026-05-02 | Unit 3 | Steel R&D | 931 | 703 | 75.6 | 4.6 | Equipment Failure | Critical |
| 423 | 2026-05-03 | Unit 3 | Steel R&D | 985 | 908 | 92.2 | 4.9 | Equipment Failure | Below Target |
| 424 | 2026-05-04 | Unit 3 | Steel R&D | 975 | 783 | 80.3 | 2.7 | Quality Check | Below Target |
| 425 | 2026-05-05 | Unit 3 | Steel R&D | 991 | 942 | 95.1 | 3.0 | Quality Check | On Target |
| 426 | 2026-05-06 | Unit 3 | Steel R&D | 997 | 726 | 72.9 | 0.2 | None | Critical |
| 427 | 2026-05-07 | Unit 3 | Steel R&D | 984 | 946 | 96.2 | 3.1 | Shift Change Delay | On Target |
| 428 | 2026-05-08 | Unit 3 | Steel R&D | 991 | 806 | 81.4 | 5.7 | Raw Material Shortage | Below Target |
| 429 | 2026-05-09 | Unit 3 | Steel R&D | 957 | 625 | 65.3 | 5.3 | Equipment Failure | Critical |
| 430 | 2026-05-10 | Unit 3 | Steel R&D | 971 | 853 | 87.9 | 1.4 | None | Below Target |
| 431 | 2026-05-11 | Unit 3 | Steel R&D | 927 | 771 | 83.3 | 1.2 | None | Below Target |
| 432 | 2026-05-12 | Unit 3 | Steel R&D | 919 | 791 | 86.1 | 2.1 | Shift Change Delay | Below Target |
| 433 | 2026-05-13 | Unit 3 | Steel R&D | 940 | 867 | 92.3 | 1.1 | None | Below Target |
| 434 | 2026-05-14 | Unit 3 | Steel R&D | 902 | 677 | 75.1 | 1.3 | None | Critical |
| 435 | 2026-05-15 | Unit 3 | Steel R&D | 944 | 818 | 86.7 | 2.6 | Scheduled Maintenance | Below Target |
| 436 | 2026-05-16 | Unit 3 | Steel R&D | 950 | 647 | 68.2 | 3.8 | Shift Change Delay | Critical |
| 437 | 2026-05-17 | Unit 3 | Steel R&D | 931 | 718 | 77.2 | 4.5 | Power Outage | Critical |
| 438 | 2026-05-18 | Unit 3 | Steel R&D | 934 | 820 | 87.8 | 2.0 | None | Below Target |
| 439 | 2026-05-19 | Unit 3 | Steel R&D | 980 | 835 | 85.3 | 3.1 | Scheduled Maintenance | Below Target |
| 440 | 2026-05-20 | Unit 3 | Steel R&D | 946 | 635 | 67.1 | 2.8 | Scheduled Maintenance | Critical |
| 441 | 2026-05-21 | Unit 3 | Steel R&D | 976 | 881 | 90.4 | 5.6 | Raw Material Shortage | Below Target |
| 442 | 2026-05-22 | Unit 3 | Steel R&D | 945 | 701 | 74.3 | 0.6 | None | Critical |
| 443 | 2026-05-23 | Unit 3 | Steel R&D | 977 | 927 | 94.9 | 2.6 | Quality Check | Below Target |
| 444 | 2026-05-24 | Unit 3 | Steel R&D | 912 | 607 | 66.6 | 2.3 | Quality Check | Critical |
| 445 | 2026-05-25 | Unit 3 | Steel R&D | 948 | 723 | 76.4 | 1.7 | None | Critical |
| 446 | 2026-05-26 | Unit 3 | Steel R&D | 909 | 626 | 68.9 | 5.8 | Raw Material Shortage | Critical |
| 447 | 2026-05-27 | Unit 3 | Steel R&D | 967 | 871 | 90.1 | 1.8 | None | Below Target |
| 448 | 2026-05-28 | Unit 3 | Steel R&D | 924 | 822 | 89.0 | 5.7 | Raw Material Shortage | Below Target |
| 449 | 2026-05-29 | Unit 3 | Steel R&D | 939 | 797 | 84.9 | 0.6 | None | Below Target |
| 450 | 2026-05-30 | Unit 3 | Steel R&D | 948 | 919 | 97.0 | 0.6 | None | On Target |
