# Schema and Data: skill_gap

This document provides the database schema and full data dump for the `skill_gap` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 5
- **Total Rows:** 876

## SQL Definition
```sql
CREATE TABLE skill_gap (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    target_role TEXT,
    missing_skill TEXT,
    readiness_score REAL
)
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `user_id` | INTEGER | No | Yes | `NULL` |  |
| 2 | `target_role` | TEXT | No | Yes | `NULL` |  |
| 3 | `missing_skill` | TEXT | No | Yes | `NULL` |  |
| 4 | `readiness_score` | REAL | No | Yes | `NULL` |  |

## Table Data
| id | user_id | target_role | missing_skill | readiness_score |
| --- | --- | --- | --- | --- |
| 877 | 1 | Cast House Senior Operator | problem solving attitude | 10.53 |
| 878 | 1 | Cast House Senior Operator | willingness to work in a factory environment | 10.53 |
| 879 | 1 | Cast House Senior Operator | communication related skills | 10.53 |
| 880 | 1 | Cast House Senior Operator | high concentration levels | 10.53 |
| 881 | 2 | Control Room Operator | control panel operation | 14.53 |
| 882 | 2 | Control Room Operator | control system operation | 14.53 |
| 883 | 2 | Control Room Operator | computer terminal operation | 14.53 |
| 884 | 3 | Heating Regulator | problem solving attitude | 33.87 |
| 885 | 3 | Heating Regulator | willingness to work in a factory environment | 33.87 |
| 886 | 4 | Cast House Senior Operator | problem solving attitude | 20.93 |
| 887 | 4 | Cast House Senior Operator | willingness to work in a factory environment | 20.93 |
| 888 | 4 | Cast House Senior Operator | communication related skills | 20.93 |
| 889 | 4 | Cast House Senior Operator | high concentration levels | 20.93 |
| 890 | 5 | Control Room Operator | control panel operation | 5.53 |
| 891 | 5 | Control Room Operator | control system operation | 5.53 |
| 892 | 5 | Control Room Operator | computer terminal operation | 5.53 |
| 893 | 6 | Process Operator: Rolling Mills | analytical skills | 14.27 |
| 894 | 6 | Process Operator: Rolling Mills | communication related skills | 14.27 |
| 895 | 6 | Process Operator: Rolling Mills | problem solving attitude | 14.27 |
| 896 | 6 | Process Operator: Rolling Mills | high concentration levels | 14.27 |
| 897 | 7 | Control Room Operator | control panel operation | 15.4 |
| 898 | 7 | Control Room Operator | control system operation | 15.4 |
| 899 | 7 | Control Room Operator | computer terminal operation | 15.4 |
| 900 | 8 | Process Operator: Rolling Mills | problem solving attitude | 37.33 |
| 901 | 8 | Process Operator: Rolling Mills | communication related skills | 37.33 |
| 902 | 9 | Control Room Operator | control panel operation | 15.2 |
| 903 | 9 | Control Room Operator | control system operation | 15.2 |
| 904 | 9 | Control Room Operator | computer terminal operation | 15.2 |
| 905 | 10 | Control Room Operator | control panel operation | 14.13 |
| 906 | 10 | Control Room Operator | control system operation | 14.13 |
| 907 | 10 | Control Room Operator | computer terminal operation | 14.13 |
| 908 | 11 | Heating Regulator | problem solving attitude | 38.07 |
| 909 | 11 | Heating Regulator | willingness to work in a factory environment | 38.07 |
| 910 | 12 | Process Operator: Rolling Mills | communication related skills | 38.4 |
| 911 | 12 | Process Operator: Rolling Mills | high concentration levels | 38.4 |
| 912 | 13 | Process Operator: Rolling Mills | analytical skills | 32.87 |
| 913 | 13 | Process Operator: Rolling Mills | communication related skills | 32.87 |
| 914 | 13 | Process Operator: Rolling Mills | problem solving attitude | 32.87 |
| 915 | 13 | Process Operator: Rolling Mills | high concentration levels | 32.87 |
| 916 | 14 | Process Operator: Rolling Mills | problem solving attitude | 11.87 |
| 917 | 14 | Process Operator: Rolling Mills | communication related skills | 11.87 |
| 918 | 14 | Process Operator: Rolling Mills | high concentration levels | 11.87 |
| 919 | 15 | Process Operator: Rolling Mills | analytical skills | 18.53 |
| 920 | 15 | Process Operator: Rolling Mills | communication related skills | 18.53 |
| 921 | 15 | Process Operator: Rolling Mills | problem solving attitude | 18.53 |
| 922 | 16 | Process Operator: Rolling Mills | analytical skills | 44.53 |
| 923 | 16 | Process Operator: Rolling Mills | problem solving attitude | 44.53 |
| 924 | 17 | Control Room Operator | control panel operation | 18.6 |
| 925 | 17 | Control Room Operator | control system operation | 18.6 |
| 926 | 17 | Control Room Operator | computer terminal operation | 18.6 |
| 927 | 18 | Cast House Senior Operator | problem solving attitude | 23.13 |
| 928 | 18 | Cast House Senior Operator | willingness to work in a factory environment | 23.13 |
| 929 | 18 | Cast House Senior Operator | communication related skills | 23.13 |
| 930 | 18 | Cast House Senior Operator | high concentration levels | 23.13 |
| 931 | 19 | Process Operator: Rolling Mills | analytical skills | 18.27 |
| 932 | 19 | Process Operator: Rolling Mills | communication related skills | 18.27 |
| 933 | 19 | Process Operator: Rolling Mills | high concentration levels | 18.27 |
| 934 | 20 | Control Room Operator | control panel operation | 20.47 |
| 935 | 20 | Control Room Operator | control system operation | 20.47 |
| 936 | 20 | Control Room Operator | computer terminal operation | 20.47 |
| 937 | 21 | Process Operator: Rolling Mills | analytical skills | 37.33 |
| 938 | 21 | Process Operator: Rolling Mills | problem solving attitude | 37.33 |
| 939 | 22 | Cast House Senior Operator | problem solving attitude | 5.8 |
| 940 | 22 | Cast House Senior Operator | willingness to work in a factory environment | 5.8 |
| 941 | 22 | Cast House Senior Operator | communication related skills | 5.8 |
| 942 | 22 | Cast House Senior Operator | high concentration levels | 5.8 |
| 943 | 23 | Process Operator: Rolling Mills | analytical skills | 24.4 |
| 944 | 23 | Process Operator: Rolling Mills | communication related skills | 24.4 |
| 945 | 23 | Process Operator: Rolling Mills | problem solving attitude | 24.4 |
| 946 | 23 | Process Operator: Rolling Mills | high concentration levels | 24.4 |
| 947 | 24 | Cast House Senior Operator | problem solving attitude | 26.0 |
| 948 | 24 | Cast House Senior Operator | willingness to work in a factory environment | 26.0 |
| 949 | 24 | Cast House Senior Operator | communication related skills | 26.0 |
| 950 | 24 | Cast House Senior Operator | high concentration levels | 26.0 |
| 951 | 25 | Cast House Senior Operator | problem solving attitude | 12.2 |
| 952 | 25 | Cast House Senior Operator | willingness to work in a factory environment | 12.2 |
| 953 | 25 | Cast House Senior Operator | communication related skills | 12.2 |
| 954 | 25 | Cast House Senior Operator | high concentration levels | 12.2 |
| 955 | 26 | Cast House Junior Operator | tap hole preparation and maintenance | 16.73 |
| 956 | 26 | Cast House Junior Operator | 5s and safety practices | 16.73 |
| 957 | 27 | Process Operator: Rolling Mills | problem solving attitude | 36.27 |
| 958 | 27 | Process Operator: Rolling Mills | high concentration levels | 36.27 |
| 959 | 28 | Process Operator: Rolling Mills | analytical skills | 30.67 |
| 960 | 28 | Process Operator: Rolling Mills | high concentration levels | 30.67 |
| 961 | 29 | Control Room Operator | control panel operation | 18.07 |
| 962 | 29 | Control Room Operator | control system operation | 18.07 |
| 963 | 29 | Control Room Operator | computer terminal operation | 18.07 |
| 964 | 30 | Cast House Senior Operator | problem solving attitude | 21.47 |
| 965 | 30 | Cast House Senior Operator | willingness to work in a factory environment | 21.47 |
| 966 | 30 | Cast House Senior Operator | communication related skills | 21.47 |
| 967 | 30 | Cast House Senior Operator | high concentration levels | 21.47 |
| 968 | 31 | Heating Regulator | communication related skills | 44.87 |
| 969 | 31 | Heating Regulator | willingness to work in a factory environment | 44.87 |
| 970 | 32 | Process Operator: Rolling Mills | analytical skills | 17.93 |
| 971 | 32 | Process Operator: Rolling Mills | communication related skills | 17.93 |
| 972 | 32 | Process Operator: Rolling Mills | problem solving attitude | 17.93 |
| 973 | 32 | Process Operator: Rolling Mills | high concentration levels | 17.93 |
| 974 | 33 | Process Operator: Rolling Mills | communication related skills | 25.07 |
| 975 | 33 | Process Operator: Rolling Mills | high concentration levels | 25.07 |
| 976 | 34 | Process Operator: Rolling Mills | analytical skills | 27.8 |
| 977 | 34 | Process Operator: Rolling Mills | communication related skills | 27.8 |
| 978 | 34 | Process Operator: Rolling Mills | problem solving attitude | 27.8 |
| 979 | 34 | Process Operator: Rolling Mills | high concentration levels | 27.8 |
| 980 | 35 | Control Room Operator | control panel operation | 9.27 |
| 981 | 35 | Control Room Operator | control system operation | 9.27 |
| 982 | 35 | Control Room Operator | computer terminal operation | 9.27 |
| 983 | 36 | Control Room Operator | control panel operation | 19.93 |
| 984 | 36 | Control Room Operator | control system operation | 19.93 |
| 985 | 36 | Control Room Operator | computer terminal operation | 19.93 |
| 986 | 37 | Process Operator: Rolling Mills | analytical skills | 21.73 |
| 987 | 37 | Process Operator: Rolling Mills | communication related skills | 21.73 |
| 988 | 37 | Process Operator: Rolling Mills | high concentration levels | 21.73 |
| 989 | 38 | Process Operator: Rolling Mills | analytical skills | 22.07 |
| 990 | 38 | Process Operator: Rolling Mills | communication related skills | 22.07 |
| 991 | 38 | Process Operator: Rolling Mills | problem solving attitude | 22.07 |
| 992 | 38 | Process Operator: Rolling Mills | high concentration levels | 22.07 |
| 993 | 39 | Process Operator: Rolling Mills | analytical skills | 30.67 |
| 994 | 39 | Process Operator: Rolling Mills | high concentration levels | 30.67 |
| 995 | 40 | Cast House Junior Operator | tap hole preparation and maintenance | 12.47 |
| 996 | 40 | Cast House Junior Operator | 5s and safety practices | 12.47 |
| 997 | 41 | Cast House Junior Operator | tap hole preparation and maintenance | 7.67 |
| 998 | 41 | Cast House Junior Operator | 5s and safety practices | 7.67 |
| 999 | 42 | Heating Regulator | problem solving attitude | 39.53 |
| 1000 | 42 | Heating Regulator | communication related skills | 39.53 |
| 1001 | 43 | Control Room Operator | control panel operation | 18.87 |
| 1002 | 43 | Control Room Operator | control system operation | 18.87 |
| 1003 | 43 | Control Room Operator | computer terminal operation | 18.87 |
| 1004 | 44 | Process Operator: Rolling Mills | problem solving attitude | 36.8 |
| 1005 | 44 | Process Operator: Rolling Mills | communication related skills | 36.8 |
| 1006 | 45 | Process Operator: Rolling Mills | communication related skills | 33.33 |
| 1007 | 45 | Process Operator: Rolling Mills | high concentration levels | 33.33 |
| 1008 | 46 | Heating Regulator | problem solving attitude | 39.6 |
| 1009 | 46 | Heating Regulator | willingness to work in a factory environment | 39.6 |
| 1010 | 47 | Cast House Senior Operator | problem solving attitude | 19.13 |
| 1011 | 47 | Cast House Senior Operator | willingness to work in a factory environment | 19.13 |
| 1012 | 47 | Cast House Senior Operator | communication related skills | 19.13 |
| 1013 | 47 | Cast House Senior Operator | high concentration levels | 19.13 |
| 1014 | 48 | Cast House Senior Operator | problem solving attitude | 17.93 |
| 1015 | 48 | Cast House Senior Operator | willingness to work in a factory environment | 17.93 |
| 1016 | 48 | Cast House Senior Operator | communication related skills | 17.93 |
| 1017 | 48 | Cast House Senior Operator | high concentration levels | 17.93 |
| 1018 | 49 | Heating Regulator | communication related skills | 39.67 |
| 1019 | 49 | Heating Regulator | willingness to work in a factory environment | 39.67 |
| 1020 | 50 | Process Operator: Rolling Mills | analytical skills | 34.53 |
| 1021 | 50 | Process Operator: Rolling Mills | communication related skills | 34.53 |
| 1022 | 50 | Process Operator: Rolling Mills | problem solving attitude | 34.53 |
| 1023 | 51 | Process Operator: Rolling Mills | communication related skills | 68.53 |
| 1024 | 52 | Cast House Junior Operator | tap hole preparation and maintenance | 35.2 |
| 1025 | 52 | Cast House Junior Operator | 5s and safety practices | 35.2 |
| 1026 | 53 | Control Room Operator | control panel operation | 46.13 |
| 1027 | 53 | Control Room Operator | control system operation | 46.13 |
| 1028 | 53 | Control Room Operator | computer terminal operation | 46.13 |
| 1029 | 54 | Cast House Senior Operator | problem solving attitude | 46.13 |
| 1030 | 54 | Cast House Senior Operator | willingness to work in a factory environment | 46.13 |
| 1031 | 54 | Cast House Senior Operator | communication related skills | 46.13 |
| 1032 | 54 | Cast House Senior Operator | high concentration levels | 46.13 |
| 1033 | 55 | Control Room Operator | control panel operation | 51.73 |
| 1034 | 55 | Control Room Operator | control system operation | 51.73 |
| 1035 | 55 | Control Room Operator | computer terminal operation | 51.73 |
| 1036 | 57 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 12.93 |
| 1037 | 57 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 12.93 |
| 1038 | 57 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 12.93 |
| 1039 | 57 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 12.93 |
| 1040 | 58 | Belt Conveyor Maintenance | physical fitness | 22.87 |
| 1041 | 58 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 22.87 |
| 1042 | 58 | Belt Conveyor Maintenance | problem solving attitude | 22.87 |
| 1043 | 58 | Belt Conveyor Maintenance | analytical skills | 22.87 |
| 1044 | 58 | Belt Conveyor Maintenance | high concentration levels | 22.87 |
| 1045 | 59 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 18.13 |
| 1046 | 59 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 18.13 |
| 1047 | 59 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 18.13 |
| 1048 | 59 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 18.13 |
| 1049 | 60 | Iron & Steel - Fitter Instrumentation | inductive detectors | 14.6 |
| 1050 | 60 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 14.6 |
| 1051 | 60 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 14.6 |
| 1052 | 61 | Mobile Equipment Maintenance | machining | 45.27 |
| 1053 | 61 | Mobile Equipment Maintenance | welding | 45.27 |
| 1054 | 62 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 15.73 |
| 1055 | 62 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 15.73 |
| 1056 | 62 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 15.73 |
| 1057 | 62 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 15.73 |
| 1058 | 63 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 36.27 |
| 1059 | 63 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 36.27 |
| 1060 | 64 | Iron & Steel - Fitter Instrumentation | inductive detectors | 15.13 |
| 1061 | 64 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 15.13 |
| 1062 | 64 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 15.13 |
| 1063 | 65 | Belt Conveyor Maintenance | physical fitness | 16.2 |
| 1064 | 65 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 16.2 |
| 1065 | 65 | Belt Conveyor Maintenance | problem solving attitude | 16.2 |
| 1066 | 65 | Belt Conveyor Maintenance | analytical skills | 16.2 |
| 1067 | 65 | Belt Conveyor Maintenance | high concentration levels | 16.2 |
| 1068 | 66 | Mobile Equipment Maintenance | machining | 22.93 |
| 1069 | 66 | Mobile Equipment Maintenance | analytical skills | 22.93 |
| 1070 | 66 | Mobile Equipment Maintenance | welding | 22.93 |
| 1071 | 67 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 21.53 |
| 1072 | 67 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 21.53 |
| 1073 | 67 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 21.53 |
| 1074 | 67 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 21.53 |
| 1075 | 68 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 9.53 |
| 1076 | 68 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 9.53 |
| 1077 | 68 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 9.53 |
| 1078 | 68 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 9.53 |
| 1079 | 69 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 36.27 |
| 1080 | 69 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 36.27 |
| 1081 | 70 | Mobile Equipment Maintenance | machining | 9.6 |
| 1082 | 70 | Mobile Equipment Maintenance | problem solving attitude | 9.6 |
| 1083 | 70 | Mobile Equipment Maintenance | welding | 9.6 |
| 1084 | 70 | Mobile Equipment Maintenance | analytical skills | 9.6 |
| 1085 | 71 | Mobile Equipment Maintenance | machining | 39.2 |
| 1086 | 71 | Mobile Equipment Maintenance | high concentration levels | 39.2 |
| 1087 | 72 | Iron & Steel - Fitter Instrumentation | inductive detectors | 2.4 |
| 1088 | 72 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 2.4 |
| 1089 | 72 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 2.4 |
| 1090 | 73 | Mobile Equipment Maintenance | machining | 54.93 |
| 1091 | 73 | Mobile Equipment Maintenance | welding | 54.93 |
| 1092 | 74 | Iron & Steel - Fitter Instrumentation | inductive detectors | 25.07 |
| 1093 | 74 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 25.07 |
| 1094 | 74 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 25.07 |
| 1095 | 75 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 33.13 |
| 1096 | 75 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 33.13 |
| 1097 | 75 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 33.13 |
| 1098 | 75 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 33.13 |
| 1099 | 76 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 40.0 |
| 1100 | 76 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 40.0 |
| 1101 | 77 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 23.67 |
| 1102 | 77 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 23.67 |
| 1103 | 77 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 23.67 |
| 1104 | 77 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 23.67 |
| 1105 | 78 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 13.27 |
| 1106 | 78 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 13.27 |
| 1107 | 78 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 13.27 |
| 1108 | 78 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 13.27 |
| 1109 | 79 | Mobile Equipment Maintenance | machining | 31.47 |
| 1110 | 79 | Mobile Equipment Maintenance | analytical skills | 31.47 |
| 1111 | 79 | Mobile Equipment Maintenance | high concentration levels | 31.47 |
| 1112 | 80 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 17.73 |
| 1113 | 80 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 17.73 |
| 1114 | 80 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 17.73 |
| 1115 | 81 | Belt Conveyor Maintenance | physical fitness | 25.93 |
| 1116 | 81 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 25.93 |
| 1117 | 81 | Belt Conveyor Maintenance | problem solving attitude | 25.93 |
| 1118 | 81 | Belt Conveyor Maintenance | analytical skills | 25.93 |
| 1119 | 81 | Belt Conveyor Maintenance | high concentration levels | 25.93 |
| 1120 | 82 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 44.27 |
| 1121 | 82 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 44.27 |
| 1122 | 83 | Belt Conveyor Maintenance | physical fitness | 11.33 |
| 1123 | 83 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 11.33 |
| 1124 | 83 | Belt Conveyor Maintenance | problem solving attitude | 11.33 |
| 1125 | 83 | Belt Conveyor Maintenance | analytical skills | 11.33 |
| 1126 | 83 | Belt Conveyor Maintenance | high concentration levels | 11.33 |
| 1127 | 84 | Belt Conveyor Maintenance | physical fitness | 4.27 |
| 1128 | 84 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 4.27 |
| 1129 | 84 | Belt Conveyor Maintenance | problem solving attitude | 4.27 |
| 1130 | 84 | Belt Conveyor Maintenance | analytical skills | 4.27 |
| 1131 | 84 | Belt Conveyor Maintenance | high concentration levels | 4.27 |
| 1132 | 85 | Belt Conveyor Maintenance | physical fitness | 21.0 |
| 1133 | 85 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 21.0 |
| 1134 | 85 | Belt Conveyor Maintenance | problem solving attitude | 21.0 |
| 1135 | 85 | Belt Conveyor Maintenance | analytical skills | 21.0 |
| 1136 | 85 | Belt Conveyor Maintenance | high concentration levels | 21.0 |
| 1137 | 86 | Mobile Equipment Maintenance | machining | 45.6 |
| 1138 | 86 | Mobile Equipment Maintenance | problem solving attitude | 45.6 |
| 1139 | 86 | Mobile Equipment Maintenance | welding | 45.6 |
| 1140 | 87 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 12.53 |
| 1141 | 87 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 12.53 |
| 1142 | 87 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 12.53 |
| 1143 | 87 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 12.53 |
| 1144 | 88 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 43.47 |
| 1145 | 88 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 43.47 |
| 1146 | 89 | Mobile Equipment Maintenance | problem solving attitude | 35.2 |
| 1147 | 89 | Mobile Equipment Maintenance | high concentration levels | 35.2 |
| 1148 | 90 | Mobile Equipment Maintenance | machining | 45.87 |
| 1149 | 90 | Mobile Equipment Maintenance | high concentration levels | 45.87 |
| 1150 | 91 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 11.87 |
| 1151 | 91 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 11.87 |
| 1152 | 91 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 11.87 |
| 1153 | 92 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 16.67 |
| 1154 | 92 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 16.67 |
| 1155 | 92 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 16.67 |
| 1156 | 92 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 16.67 |
| 1157 | 93 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 18.8 |
| 1158 | 93 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 18.8 |
| 1159 | 93 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 18.8 |
| 1160 | 93 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 18.8 |
| 1161 | 94 | Belt Conveyor Maintenance | physical fitness | 17.53 |
| 1162 | 94 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 17.53 |
| 1163 | 94 | Belt Conveyor Maintenance | problem solving attitude | 17.53 |
| 1164 | 94 | Belt Conveyor Maintenance | analytical skills | 17.53 |
| 1165 | 94 | Belt Conveyor Maintenance | high concentration levels | 17.53 |
| 1166 | 95 | Mobile Equipment Maintenance | welding | 6.07 |
| 1167 | 95 | Mobile Equipment Maintenance | problem solving attitude | 6.07 |
| 1168 | 95 | Mobile Equipment Maintenance | machining | 6.07 |
| 1169 | 95 | Mobile Equipment Maintenance | analytical skills | 6.07 |
| 1170 | 95 | Mobile Equipment Maintenance | high concentration levels | 6.07 |
| 1171 | 96 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 24.93 |
| 1172 | 96 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 24.93 |
| 1173 | 96 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 24.93 |
| 1174 | 96 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 24.93 |
| 1175 | 97 | Mobile Equipment Maintenance | machining | 35.53 |
| 1176 | 97 | Mobile Equipment Maintenance | welding | 35.53 |
| 1177 | 97 | Mobile Equipment Maintenance | high concentration levels | 35.53 |
| 1178 | 98 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 43.47 |
| 1179 | 98 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 43.47 |
| 1180 | 99 | Iron & Steel - Fitter Instrumentation | inductive detectors | 13.0 |
| 1181 | 99 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 13.0 |
| 1182 | 99 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 13.0 |
| 1183 | 100 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 23.53 |
| 1184 | 100 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 23.53 |
| 1185 | 100 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 23.53 |
| 1186 | 100 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 23.53 |
| 1187 | 101 | Mobile Equipment Maintenance | machining | 16.27 |
| 1188 | 101 | Mobile Equipment Maintenance | problem solving attitude | 16.27 |
| 1189 | 101 | Mobile Equipment Maintenance | welding | 16.27 |
| 1190 | 101 | Mobile Equipment Maintenance | high concentration levels | 16.27 |
| 1191 | 102 | Mobile Equipment Maintenance | machining | 14.07 |
| 1192 | 102 | Mobile Equipment Maintenance | problem solving attitude | 14.07 |
| 1193 | 102 | Mobile Equipment Maintenance | welding | 14.07 |
| 1194 | 102 | Mobile Equipment Maintenance | analytical skills | 14.07 |
| 1195 | 103 | Belt Conveyor Maintenance | physical fitness | 28.13 |
| 1196 | 103 | Belt Conveyor Maintenance | working knowledge of tools & fixtures | 28.13 |
| 1197 | 103 | Belt Conveyor Maintenance | problem solving attitude | 28.13 |
| 1198 | 103 | Belt Conveyor Maintenance | analytical skills | 28.13 |
| 1199 | 103 | Belt Conveyor Maintenance | high concentration levels | 28.13 |
| 1200 | 104 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 29.87 |
| 1201 | 104 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 29.87 |
| 1202 | 105 | Mobile Equipment Maintenance | problem solving attitude | 33.07 |
| 1203 | 105 | Mobile Equipment Maintenance | high concentration levels | 33.07 |
| 1204 | 106 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 26.8 |
| 1205 | 106 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 26.8 |
| 1206 | 106 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 26.8 |
| 1207 | 106 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 26.8 |
| 1208 | 107 | Iron & Steel - Fitter Instrumentation | inductive detectors | 48.53 |
| 1209 | 107 | Iron & Steel - Fitter Instrumentation | mechanical detectors | 48.53 |
| 1210 | 107 | Iron & Steel - Fitter Instrumentation | punching holes in panels | 48.53 |
| 1211 | 108 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 38.4 |
| 1212 | 108 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 38.4 |
| 1213 | 108 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 38.4 |
| 1214 | 108 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 38.4 |
| 1215 | 111 | Fitter: Hydraulic & Pneumatic System | assembly and disassembly | 37.33 |
| 1216 | 111 | Fitter: Hydraulic & Pneumatic System | troubleshooting | 37.33 |
| 1217 | 111 | Fitter: Hydraulic & Pneumatic System | hydraulic equipment maintenance | 37.33 |
| 1218 | 111 | Fitter: Hydraulic & Pneumatic System | pneumatic equipment maintenance | 37.33 |
| 1219 | 113 | Rigger: Rigging of Heavy Material | analytical skills | 19.4 |
| 1220 | 113 | Rigger: Rigging of Heavy Material | communication related skills | 19.4 |
| 1221 | 114 | Locomotive Driver | routine inspection | 6.07 |
| 1222 | 114 | Locomotive Driver | 5s and safety practices | 6.07 |
| 1223 | 114 | Locomotive Driver | traffic signals | 6.07 |
| 1224 | 115 | Rigger: Rigging of Heavy Material | analytical skills | 32.13 |
| 1225 | 115 | Rigger: Rigging of Heavy Material | communication related skills | 32.13 |
| 1226 | 116 | Rigger: Rigging of Heavy Material | problem solving | 26.27 |
| 1227 | 116 | Rigger: Rigging of Heavy Material | communication related skills | 26.27 |
| 1228 | 117 | Rigger: Rigging of Heavy Material | analytical skills | 14.93 |
| 1229 | 117 | Rigger: Rigging of Heavy Material | communication related skills | 14.93 |
| 1230 | 118 | EOT Overhead Crane Operator | analytical skills | 16.33 |
| 1231 | 118 | EOT Overhead Crane Operator | problem solving attitude | 16.33 |
| 1232 | 118 | EOT Overhead Crane Operator | high concentration levels | 16.33 |
| 1233 | 119 | Locomotive Driver | routine inspection | 39.2 |
| 1234 | 120 | EOT Overhead Crane Operator | problem solving attitude | 27.47 |
| 1235 | 120 | EOT Overhead Crane Operator | high concentration levels | 27.47 |
| 1236 | 121 | Rigger: Rigging of Heavy Material | analytical skills | 17.87 |
| 1237 | 121 | Rigger: Rigging of Heavy Material | communication related skills | 17.87 |
| 1238 | 122 | Rigger: Rigging of Heavy Material | analytical skills | 14.13 |
| 1239 | 122 | Rigger: Rigging of Heavy Material | communication related skills | 14.13 |
| 1240 | 123 | Locomotive Driver | traffic signals | 41.07 |
| 1241 | 124 | Rigger: Rigging of Heavy Material | analytical skills | 39.0 |
| 1242 | 124 | Rigger: Rigging of Heavy Material | communication related skills | 39.0 |
| 1243 | 125 | Locomotive Driver | routine inspection | 22.33 |
| 1244 | 125 | Locomotive Driver | 5s and safety practices | 22.33 |
| 1245 | 125 | Locomotive Driver | traffic signals | 22.33 |
| 1246 | 126 | EOT Overhead Crane Operator | communication related skills | 32.53 |
| 1247 | 126 | EOT Overhead Crane Operator | high concentration levels | 32.53 |
| 1248 | 127 | Locomotive Driver | routine inspection | 9.53 |
| 1249 | 127 | Locomotive Driver | 5s and safety practices | 9.53 |
| 1250 | 127 | Locomotive Driver | traffic signals | 9.53 |
| 1251 | 128 | Mobile Equipment Operator | analytical skills | 2.4 |
| 1252 | 128 | Mobile Equipment Operator | communication related skills | 2.4 |
| 1253 | 128 | Mobile Equipment Operator | problem solving attitude | 2.4 |
| 1254 | 128 | Mobile Equipment Operator | high concentration levels | 2.4 |
| 1255 | 129 | Locomotive Driver | routine inspection | 23.53 |
| 1256 | 129 | Locomotive Driver | 5s and safety practices | 23.53 |
| 1257 | 129 | Locomotive Driver | traffic signals | 23.53 |
| 1258 | 130 | Locomotive Driver | routine inspection | 13.6 |
| 1259 | 130 | Locomotive Driver | traffic signals | 13.6 |
| 1260 | 131 | Rigger: Rigging of Heavy Material | problem solving | 47.0 |
| 1261 | 131 | Rigger: Rigging of Heavy Material | communication related skills | 47.0 |
| 1262 | 132 | Locomotive Driver | routine inspection | 14.67 |
| 1263 | 132 | Locomotive Driver | 5s and safety practices | 14.67 |
| 1264 | 133 | EOT Overhead Crane Operator | communication related skills | 34.33 |
| 1265 | 133 | EOT Overhead Crane Operator | high concentration levels | 34.33 |
| 1266 | 134 | EOT Overhead Crane Operator | analytical skills | 37.33 |
| 1267 | 134 | EOT Overhead Crane Operator | high concentration levels | 37.33 |
| 1268 | 135 | Locomotive Driver | routine inspection | 56.53 |
| 1269 | 136 | Locomotive Driver | routine inspection | 20.33 |
| 1270 | 136 | Locomotive Driver | 5s and safety practices | 20.33 |
| 1271 | 136 | Locomotive Driver | traffic signals | 20.33 |
| 1272 | 137 | Mobile Equipment Operator | problem solving attitude | 40.47 |
| 1273 | 137 | Mobile Equipment Operator | high concentration levels | 40.47 |
| 1274 | 138 | Locomotive Driver | routine inspection | 21.47 |
| 1275 | 138 | Locomotive Driver | 5s and safety practices | 21.47 |
| 1276 | 138 | Locomotive Driver | traffic signals | 21.47 |
| 1277 | 139 | Rigger: Rigging of Heavy Material | analytical skills | 18.6 |
| 1278 | 139 | Rigger: Rigging of Heavy Material | communication related skills | 18.6 |
| 1279 | 140 | Rigger: Rigging of Heavy Material | communication related skills | 52.27 |
| 1280 | 141 | Locomotive Driver | traffic signals | 50.93 |
| 1281 | 142 | EOT Overhead Crane Operator | analytical skills | 30.07 |
| 1282 | 142 | EOT Overhead Crane Operator | high concentration levels | 30.07 |
| 1283 | 143 | Locomotive Driver | 5s and safety practices | 53.87 |
| 1284 | 144 | EOT Overhead Crane Operator | problem solving attitude | 25.07 |
| 1285 | 144 | EOT Overhead Crane Operator | communication related skills | 25.07 |
| 1286 | 145 | Rigger: Rigging of Heavy Material | analytical skills | 22.33 |
| 1287 | 145 | Rigger: Rigging of Heavy Material | communication related skills | 22.33 |
| 1288 | 146 | Locomotive Driver | routine inspection | 13.73 |
| 1289 | 146 | Locomotive Driver | 5s and safety practices | 13.73 |
| 1290 | 146 | Locomotive Driver | traffic signals | 13.73 |
| 1291 | 147 | Locomotive Driver | routine inspection | 24.33 |
| 1292 | 147 | Locomotive Driver | 5s and safety practices | 24.33 |
| 1293 | 147 | Locomotive Driver | traffic signals | 24.33 |
| 1294 | 148 | Locomotive Driver | routine inspection | 16.8 |
| 1295 | 148 | Locomotive Driver | 5s and safety practices | 16.8 |
| 1296 | 148 | Locomotive Driver | traffic signals | 16.8 |
| 1297 | 149 | Locomotive Driver | routine inspection | 14.93 |
| 1298 | 149 | Locomotive Driver | traffic signals | 14.93 |
| 1299 | 150 | Mobile Equipment Operator | analytical skills | 35.47 |
| 1300 | 150 | Mobile Equipment Operator | problem solving attitude | 35.47 |
| 1301 | 150 | Mobile Equipment Operator | high concentration levels | 35.47 |
| 1302 | 151 | Locomotive Driver | routine inspection | 26.67 |
| 1303 | 151 | Locomotive Driver | traffic signals | 26.67 |
| 1304 | 152 | EOT Overhead Crane Operator | analytical skills | 42.0 |
| 1305 | 152 | EOT Overhead Crane Operator | communication related skills | 42.0 |
| 1306 | 153 | Locomotive Driver | routine inspection | 17.93 |
| 1307 | 153 | Locomotive Driver | 5s and safety practices | 17.93 |
| 1308 | 153 | Locomotive Driver | traffic signals | 17.93 |
| 1309 | 154 | Mobile Equipment Operator | problem solving attitude | 20.4 |
| 1310 | 154 | Mobile Equipment Operator | communication related skills | 20.4 |
| 1311 | 154 | Mobile Equipment Operator | high concentration levels | 20.4 |
| 1312 | 155 | Mobile Equipment Operator | analytical skills | 25.4 |
| 1313 | 155 | Mobile Equipment Operator | problem solving attitude | 25.4 |
| 1314 | 155 | Mobile Equipment Operator | high concentration levels | 25.4 |
| 1315 | 156 | Locomotive Driver | routine inspection | 14.67 |
| 1316 | 156 | Locomotive Driver | 5s and safety practices | 14.67 |
| 1317 | 157 | EOT Overhead Crane Operator | analytical skills | 45.13 |
| 1318 | 157 | EOT Overhead Crane Operator | communication related skills | 45.13 |
| 1319 | 158 | Locomotive Driver | routine inspection | 20.93 |
| 1320 | 158 | Locomotive Driver | 5s and safety practices | 20.93 |
| 1321 | 158 | Locomotive Driver | traffic signals | 20.93 |
| 1322 | 159 | EOT Overhead Crane Operator | analytical skills | 43.0 |
| 1323 | 159 | EOT Overhead Crane Operator | high concentration levels | 43.0 |
| 1324 | 160 | Locomotive Driver | routine inspection | 39.2 |
| 1325 | 161 | Locomotive Driver | routine inspection | 56.8 |
| 1326 | 162 | EOT Overhead Crane Operator | analytical skills | 42.8 |
| 1327 | 162 | EOT Overhead Crane Operator | high concentration levels | 42.8 |
| 1328 | 164 | Rigger: Rigging of Heavy Material | communication related skills | 76.53 |
| 1329 | 165 | Mobile Equipment Operator | problem solving attitude | 75.47 |
| 1330 | 165 | Mobile Equipment Operator | high concentration levels | 75.47 |
| 1331 | 169 | Laboratory Technician Physical | basic computer operations | 50.13 |
| 1332 | 170 | Laboratory Technician Physical | hands on training | 54.67 |
| 1333 | 171 | Laboratory Technician Physical | job specific safety training | 41.6 |
| 1334 | 172 | Laboratory Technician Physical | basic computer operations | 51.73 |
| 1335 | 173 | Laboratory Technician Physical | basic computer operations | 33.87 |
| 1336 | 174 | Laboratory Technician Physical | hands on training | 42.67 |
| 1337 | 175 | Laboratory Technician Physical | basic computer operations | 37.07 |
| 1338 | 176 | Laboratory Technician Physical | basic computer operations | 46.4 |
| 1339 | 177 | Laboratory Technician Physical | job specific safety training | 44.27 |
| 1340 | 178 | Laboratory Technician Physical | basic computer operations | 54.13 |
| 1341 | 179 | Laboratory Technician Physical | hands on training | 49.6 |
| 1342 | 180 | Laboratory Technician Physical | job specific safety training | 33.33 |
| 1343 | 181 | Laboratory Technician Physical | job specific safety training | 46.13 |
| 1344 | 182 | Laboratory Technician Physical | basic computer operations | 57.6 |
| 1345 | 183 | Laboratory Technician Physical | job specific safety training | 49.6 |
| 1346 | 184 | Laboratory Technician Physical | job specific safety training | 43.2 |
| 1347 | 185 | Laboratory Technician Physical | basic computer operations | 20.8 |
| 1348 | 185 | Laboratory Technician Physical | job specific safety training | 20.8 |
| 1349 | 186 | Laboratory Technician Physical | hands on training | 39.73 |
| 1350 | 187 | Laboratory Technician Physical | job specific safety training | 34.93 |
| 1351 | 188 | Laboratory Technician Physical | basic computer operations | 40.53 |
| 1352 | 189 | Laboratory Technician Physical | basic computer operations | 44.8 |
| 1353 | 190 | Laboratory Technician Physical | hands on training | 13.33 |
| 1354 | 190 | Laboratory Technician Physical | job specific safety training | 13.33 |
| 1355 | 191 | Laboratory Technician Physical | hands on training | 46.67 |
| 1356 | 192 | Laboratory Technician Physical | job specific safety training | 50.93 |
| 1357 | 193 | Laboratory Technician Physical | hands on training | 51.73 |
| 1358 | 194 | Laboratory Technician Physical | hands on training | 46.67 |
| 1359 | 195 | Laboratory Technician Physical | basic computer operations | 42.67 |
| 1360 | 196 | Laboratory Technician Physical | job specific safety training | 39.47 |
| 1361 | 197 | Laboratory Technician Physical | hands on training | 57.07 |
| 1362 | 198 | Laboratory Technician Physical | basic computer operations | 47.73 |
| 1363 | 199 | Laboratory Technician Physical | hands on training | 39.2 |
| 1364 | 200 | Laboratory Technician Physical | hands on training | 51.47 |
| 1365 | 201 | Laboratory Technician Physical | job specific safety training | 47.47 |
| 1366 | 202 | Laboratory Technician Physical | job specific safety training | 38.93 |
| 1367 | 203 | Laboratory Technician Physical | job specific safety training | 48.0 |
| 1368 | 204 | Laboratory Technician Physical | hands on training | 42.13 |
| 1369 | 205 | Laboratory Technician Physical | basic computer operations | 45.87 |
| 1370 | 206 | Laboratory Technician Physical | hands on training | 54.93 |
| 1371 | 207 | Laboratory Technician Physical | job specific safety training | 52.27 |
| 1372 | 208 | Laboratory Technician Physical | hands on training | 42.93 |
| 1373 | 209 | Laboratory Technician Physical | basic computer operations | 21.87 |
| 1374 | 209 | Laboratory Technician Physical | hands on training | 21.87 |
| 1375 | 210 | Laboratory Technician Physical | job specific safety training | 59.2 |
| 1376 | 211 | Laboratory Technician Physical | hands on training | 54.93 |
| 1377 | 212 | Laboratory Technician Physical | basic computer operations | 20.53 |
| 1378 | 212 | Laboratory Technician Physical | hands on training | 20.53 |
| 1379 | 213 | Laboratory Technician Physical | hands on training | 51.73 |
| 1380 | 214 | Laboratory Technician Physical | hands on training | 35.2 |
| 1381 | 215 | Laboratory Technician Physical | basic computer operations | 40.0 |
| 1382 | 216 | Laboratory Technician Physical | job specific safety training | 42.67 |
| 1383 | 217 | Laboratory Technician Physical | basic computer operations | 22.67 |
| 1384 | 217 | Laboratory Technician Physical | hands on training | 22.67 |
| 1385 | 218 | Laboratory Technician Physical | job specific safety training | 43.2 |
| 1386 | 225 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 37.87 |
| 1387 | 225 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 37.87 |
| 1388 | 226 | Iron & Steel - Machinist | problem solving attitude | 16.47 |
| 1389 | 226 | Iron & Steel - Machinist | willingness to work in a factory environment | 16.47 |
| 1390 | 226 | Iron & Steel - Machinist | communication related skills | 16.47 |
| 1391 | 226 | Iron & Steel - Machinist | high concentration levels | 16.47 |
| 1392 | 227 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 36.53 |
| 1393 | 227 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 36.53 |
| 1394 | 228 | Iron & Steel - Machinist | problem solving attitude | 30.47 |
| 1395 | 228 | Iron & Steel - Machinist | willingness to work in a factory environment | 30.47 |
| 1396 | 228 | Iron & Steel - Machinist | communication related skills | 30.47 |
| 1397 | 228 | Iron & Steel - Machinist | high concentration levels | 30.47 |
| 1398 | 229 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 28.27 |
| 1399 | 229 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 28.27 |
| 1400 | 230 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 28.87 |
| 1401 | 230 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 28.87 |
| 1402 | 230 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 28.87 |
| 1403 | 230 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 28.87 |
| 1404 | 231 | Iron & Steel - Machinist | problem solving attitude | 18.53 |
| 1405 | 231 | Iron & Steel - Machinist | willingness to work in a factory environment | 18.53 |
| 1406 | 231 | Iron & Steel - Machinist | communication related skills | 18.53 |
| 1407 | 231 | Iron & Steel - Machinist | high concentration levels | 18.53 |
| 1408 | 232 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 20.73 |
| 1409 | 232 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 20.73 |
| 1410 | 232 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 20.73 |
| 1411 | 232 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 20.73 |
| 1412 | 233 | Iron & Steel - Machinist | problem solving attitude | 29.4 |
| 1413 | 233 | Iron & Steel - Machinist | willingness to work in a factory environment | 29.4 |
| 1414 | 233 | Iron & Steel - Machinist | communication related skills | 29.4 |
| 1415 | 233 | Iron & Steel - Machinist | high concentration levels | 29.4 |
| 1416 | 234 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 35.73 |
| 1417 | 234 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 35.73 |
| 1418 | 235 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 20.07 |
| 1419 | 235 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 20.07 |
| 1420 | 235 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 20.07 |
| 1421 | 235 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 20.07 |
| 1422 | 236 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 18.33 |
| 1423 | 236 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 18.33 |
| 1424 | 236 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 18.33 |
| 1425 | 236 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 18.33 |
| 1426 | 237 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 15.07 |
| 1427 | 237 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 15.07 |
| 1428 | 237 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 15.07 |
| 1429 | 237 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 15.07 |
| 1430 | 238 | Iron & Steel - Machinist | problem solving attitude | 26.8 |
| 1431 | 238 | Iron & Steel - Machinist | willingness to work in a factory environment | 26.8 |
| 1432 | 238 | Iron & Steel - Machinist | communication related skills | 26.8 |
| 1433 | 238 | Iron & Steel - Machinist | high concentration levels | 26.8 |
| 1434 | 239 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 2.67 |
| 1435 | 239 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 2.67 |
| 1436 | 239 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 2.67 |
| 1437 | 239 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 2.67 |
| 1438 | 240 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 17.2 |
| 1439 | 240 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 17.2 |
| 1440 | 240 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 17.2 |
| 1441 | 240 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 17.2 |
| 1442 | 241 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 23.07 |
| 1443 | 241 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 23.07 |
| 1444 | 241 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 23.07 |
| 1445 | 241 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 23.07 |
| 1446 | 242 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 17.73 |
| 1447 | 242 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 17.73 |
| 1448 | 242 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 17.73 |
| 1449 | 242 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 17.73 |
| 1450 | 243 | Iron & Steel - Machinist | problem solving attitude | 20.13 |
| 1451 | 243 | Iron & Steel - Machinist | willingness to work in a factory environment | 20.13 |
| 1452 | 243 | Iron & Steel - Machinist | communication related skills | 20.13 |
| 1453 | 243 | Iron & Steel - Machinist | high concentration levels | 20.13 |
| 1454 | 244 | Iron & Steel - Machinist | problem solving attitude | 6.07 |
| 1455 | 244 | Iron & Steel - Machinist | willingness to work in a factory environment | 6.07 |
| 1456 | 244 | Iron & Steel - Machinist | communication related skills | 6.07 |
| 1457 | 244 | Iron & Steel - Machinist | high concentration levels | 6.07 |
| 1458 | 245 | Iron & Steel - Machinist | problem solving attitude | 17.2 |
| 1459 | 245 | Iron & Steel - Machinist | willingness to work in a factory environment | 17.2 |
| 1460 | 245 | Iron & Steel - Machinist | communication related skills | 17.2 |
| 1461 | 245 | Iron & Steel - Machinist | high concentration levels | 17.2 |
| 1462 | 246 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 37.6 |
| 1463 | 246 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 37.6 |
| 1464 | 247 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 21.0 |
| 1465 | 247 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 21.0 |
| 1466 | 247 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 21.0 |
| 1467 | 247 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 21.0 |
| 1468 | 248 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 33.87 |
| 1469 | 248 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 33.87 |
| 1470 | 249 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 22.6 |
| 1471 | 249 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 22.6 |
| 1472 | 249 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 22.6 |
| 1473 | 249 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 22.6 |
| 1474 | 250 | Iron & Steel - Machinist | problem solving attitude | 24.13 |
| 1475 | 250 | Iron & Steel - Machinist | willingness to work in a factory environment | 24.13 |
| 1476 | 250 | Iron & Steel - Machinist | communication related skills | 24.13 |
| 1477 | 250 | Iron & Steel - Machinist | high concentration levels | 24.13 |
| 1478 | 251 | Iron & Steel - Machinist | problem solving attitude | 10.13 |
| 1479 | 251 | Iron & Steel - Machinist | willingness to work in a factory environment | 10.13 |
| 1480 | 251 | Iron & Steel - Machinist | communication related skills | 10.13 |
| 1481 | 251 | Iron & Steel - Machinist | high concentration levels | 10.13 |
| 1482 | 252 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 36.8 |
| 1483 | 252 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 36.8 |
| 1484 | 253 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 43.47 |
| 1485 | 253 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 43.47 |
| 1486 | 254 | Iron & Steel - Machinist | problem solving attitude | 14.0 |
| 1487 | 254 | Iron & Steel - Machinist | willingness to work in a factory environment | 14.0 |
| 1488 | 254 | Iron & Steel - Machinist | communication related skills | 14.0 |
| 1489 | 254 | Iron & Steel - Machinist | high concentration levels | 14.0 |
| 1490 | 255 | Iron & Steel - Machinist | problem solving attitude | 19.07 |
| 1491 | 255 | Iron & Steel - Machinist | willingness to work in a factory environment | 19.07 |
| 1492 | 255 | Iron & Steel - Machinist | communication related skills | 19.07 |
| 1493 | 255 | Iron & Steel - Machinist | high concentration levels | 19.07 |
| 1494 | 256 | Iron & Steel - Machinist | problem solving attitude | 16.4 |
| 1495 | 256 | Iron & Steel - Machinist | willingness to work in a factory environment | 16.4 |
| 1496 | 256 | Iron & Steel - Machinist | communication related skills | 16.4 |
| 1497 | 256 | Iron & Steel - Machinist | high concentration levels | 16.4 |
| 1498 | 257 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 41.6 |
| 1499 | 257 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 41.6 |
| 1500 | 258 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 23.2 |
| 1501 | 258 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 23.2 |
| 1502 | 259 | Iron & Steel - Machinist | problem solving attitude | 17.07 |
| 1503 | 259 | Iron & Steel - Machinist | willingness to work in a factory environment | 17.07 |
| 1504 | 259 | Iron & Steel - Machinist | communication related skills | 17.07 |
| 1505 | 259 | Iron & Steel - Machinist | high concentration levels | 17.07 |
| 1506 | 260 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 36.53 |
| 1507 | 260 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 36.53 |
| 1508 | 261 | Iron & Steel - Machinist | problem solving attitude | 10.93 |
| 1509 | 261 | Iron & Steel - Machinist | willingness to work in a factory environment | 10.93 |
| 1510 | 261 | Iron & Steel - Machinist | communication related skills | 10.93 |
| 1511 | 261 | Iron & Steel - Machinist | high concentration levels | 10.93 |
| 1512 | 262 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 17.2 |
| 1513 | 262 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 17.2 |
| 1514 | 262 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 17.2 |
| 1515 | 263 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 34.67 |
| 1516 | 263 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 34.67 |
| 1517 | 264 | Iron & Steel - Machinist | problem solving attitude | 8.47 |
| 1518 | 264 | Iron & Steel - Machinist | willingness to work in a factory environment | 8.47 |
| 1519 | 264 | Iron & Steel - Machinist | communication related skills | 8.47 |
| 1520 | 264 | Iron & Steel - Machinist | high concentration levels | 8.47 |
| 1521 | 265 | Iron & Steel - Machinist | problem solving attitude | 7.2 |
| 1522 | 265 | Iron & Steel - Machinist | willingness to work in a factory environment | 7.2 |
| 1523 | 265 | Iron & Steel - Machinist | communication related skills | 7.2 |
| 1524 | 265 | Iron & Steel - Machinist | high concentration levels | 7.2 |
| 1525 | 266 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 8.53 |
| 1526 | 266 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 8.53 |
| 1527 | 266 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 8.53 |
| 1528 | 266 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 8.53 |
| 1529 | 267 | Iron & Steel - Machinist | problem solving attitude | 24.13 |
| 1530 | 267 | Iron & Steel - Machinist | willingness to work in a factory environment | 24.13 |
| 1531 | 267 | Iron & Steel - Machinist | communication related skills | 24.13 |
| 1532 | 267 | Iron & Steel - Machinist | high concentration levels | 24.13 |
| 1533 | 268 | Iron & Steel - Machinist | problem solving attitude | 10.07 |
| 1534 | 268 | Iron & Steel - Machinist | willingness to work in a factory environment | 10.07 |
| 1535 | 268 | Iron & Steel - Machinist | communication related skills | 10.07 |
| 1536 | 268 | Iron & Steel - Machinist | high concentration levels | 10.07 |
| 1537 | 269 | Iron & Steel - Machinist | problem solving attitude | 4.8 |
| 1538 | 269 | Iron & Steel - Machinist | willingness to work in a factory environment | 4.8 |
| 1539 | 269 | Iron & Steel - Machinist | communication related skills | 4.8 |
| 1540 | 269 | Iron & Steel - Machinist | high concentration levels | 4.8 |
| 1541 | 270 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 13.8 |
| 1542 | 270 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 13.8 |
| 1543 | 270 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 13.8 |
| 1544 | 270 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 13.8 |
| 1545 | 271 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 43.47 |
| 1546 | 271 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 43.47 |
| 1547 | 272 | Iron & Steel - Machinist | problem solving attitude | 9.27 |
| 1548 | 272 | Iron & Steel - Machinist | willingness to work in a factory environment | 9.27 |
| 1549 | 272 | Iron & Steel - Machinist | communication related skills | 9.27 |
| 1550 | 272 | Iron & Steel - Machinist | high concentration levels | 9.27 |
| 1551 | 273 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 19.67 |
| 1552 | 273 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 19.67 |
| 1553 | 273 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 19.67 |
| 1554 | 273 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 19.67 |
| 1555 | 274 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 17.47 |
| 1556 | 274 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 17.47 |
| 1557 | 274 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 17.47 |
| 1558 | 275 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 54.93 |
| 1559 | 275 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 54.93 |
| 1560 | 275 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 54.93 |
| 1561 | 275 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 54.93 |
| 1562 | 276 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 45.07 |
| 1563 | 276 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 45.07 |
| 1564 | 276 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 45.07 |
| 1565 | 276 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 45.07 |
| 1566 | 278 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 50.13 |
| 1567 | 278 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 50.13 |
| 1568 | 278 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 50.13 |
| 1569 | 278 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 50.13 |
| 1570 | 279 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | gas tungsten arc welding (gtaw) | 47.73 |
| 1571 | 279 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding procedure specification | 47.73 |
| 1572 | 279 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | welding joints | 47.73 |
| 1573 | 279 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | tungsten inert arc welding (gtaw) | 47.73 |
| 1574 | 281 | Refractory Brick Layer | problem solving attitude | 34.4 |
| 1575 | 281 | Refractory Brick Layer | high concentration levels | 34.4 |
| 1576 | 282 | Refractory Brick Layer | communication related skills | 31.2 |
| 1577 | 282 | Refractory Brick Layer | willingness to work in a factory environment | 31.2 |
| 1578 | 282 | Refractory Brick Layer | high concentration levels | 31.2 |
| 1579 | 283 | Fluid Management Operator: Rolling Mills | physical fitness | 18.33 |
| 1580 | 283 | Fluid Management Operator: Rolling Mills | problem solving attitude | 18.33 |
| 1581 | 283 | Fluid Management Operator: Rolling Mills | inventory management | 18.33 |
| 1582 | 283 | Fluid Management Operator: Rolling Mills | sharp reflex | 18.33 |
| 1583 | 283 | Fluid Management Operator: Rolling Mills | analytical skills | 18.33 |
| 1584 | 284 | Refractory Brick Layer | communication related skills | 38.13 |
| 1585 | 284 | Refractory Brick Layer | willingness to work in a factory environment | 38.13 |
| 1586 | 284 | Refractory Brick Layer | high concentration levels | 38.13 |
| 1587 | 285 | Refractory Brick Layer | communication related skills | 30.93 |
| 1588 | 285 | Refractory Brick Layer | willingness to work in a factory environment | 30.93 |
| 1589 | 285 | Refractory Brick Layer | high concentration levels | 30.93 |
| 1590 | 286 | Refractory Brick Layer | communication related skills | 44.0 |
| 1591 | 286 | Refractory Brick Layer | high concentration levels | 44.0 |
| 1592 | 287 | Refractory Brick Layer | willingness to work in a factory environment | 40.8 |
| 1593 | 287 | Refractory Brick Layer | high concentration levels | 40.8 |
| 1594 | 288 | Fluid Management Operator: Rolling Mills | physical fitness | 8.73 |
| 1595 | 288 | Fluid Management Operator: Rolling Mills | problem solving attitude | 8.73 |
| 1596 | 288 | Fluid Management Operator: Rolling Mills | inventory management | 8.73 |
| 1597 | 288 | Fluid Management Operator: Rolling Mills | sharp reflex | 8.73 |
| 1598 | 288 | Fluid Management Operator: Rolling Mills | analytical skills | 8.73 |
| 1599 | 289 | Fluid Management Operator: Rolling Mills | physical fitness | 17.8 |
| 1600 | 289 | Fluid Management Operator: Rolling Mills | problem solving attitude | 17.8 |
| 1601 | 289 | Fluid Management Operator: Rolling Mills | inventory management | 17.8 |
| 1602 | 289 | Fluid Management Operator: Rolling Mills | sharp reflex | 17.8 |
| 1603 | 289 | Fluid Management Operator: Rolling Mills | analytical skills | 17.8 |
| 1604 | 290 | Fluid Management Operator: Rolling Mills | physical fitness | 14.53 |
| 1605 | 290 | Fluid Management Operator: Rolling Mills | problem solving attitude | 14.53 |
| 1606 | 290 | Fluid Management Operator: Rolling Mills | inventory management | 14.53 |
| 1607 | 290 | Fluid Management Operator: Rolling Mills | sharp reflex | 14.53 |
| 1608 | 290 | Fluid Management Operator: Rolling Mills | analytical skills | 14.53 |
| 1609 | 291 | Fluid Management Operator: Rolling Mills | physical fitness | 19.4 |
| 1610 | 291 | Fluid Management Operator: Rolling Mills | problem solving attitude | 19.4 |
| 1611 | 291 | Fluid Management Operator: Rolling Mills | inventory management | 19.4 |
| 1612 | 291 | Fluid Management Operator: Rolling Mills | sharp reflex | 19.4 |
| 1613 | 291 | Fluid Management Operator: Rolling Mills | analytical skills | 19.4 |
| 1614 | 292 | Fluid Management Operator: Rolling Mills | physical fitness | 16.2 |
| 1615 | 292 | Fluid Management Operator: Rolling Mills | problem solving attitude | 16.2 |
| 1616 | 292 | Fluid Management Operator: Rolling Mills | inventory management | 16.2 |
| 1617 | 292 | Fluid Management Operator: Rolling Mills | sharp reflex | 16.2 |
| 1618 | 292 | Fluid Management Operator: Rolling Mills | analytical skills | 16.2 |
| 1619 | 293 | Refractory Brick Layer | problem solving attitude | 19.93 |
| 1620 | 293 | Refractory Brick Layer | willingness to work in a factory environment | 19.93 |
| 1621 | 293 | Refractory Brick Layer | communication related skills | 19.93 |
| 1622 | 293 | Refractory Brick Layer | high concentration levels | 19.93 |
| 1623 | 294 | Fluid Management Operator: Rolling Mills | physical fitness | 29.67 |
| 1624 | 294 | Fluid Management Operator: Rolling Mills | problem solving attitude | 29.67 |
| 1625 | 294 | Fluid Management Operator: Rolling Mills | inventory management | 29.67 |
| 1626 | 294 | Fluid Management Operator: Rolling Mills | sharp reflex | 29.67 |
| 1627 | 294 | Fluid Management Operator: Rolling Mills | analytical skills | 29.67 |
| 1628 | 295 | Refractory Brick Layer | communication related skills | 36.53 |
| 1629 | 295 | Refractory Brick Layer | high concentration levels | 36.53 |
| 1630 | 296 | Fluid Management Operator: Rolling Mills | physical fitness | 11.93 |
| 1631 | 296 | Fluid Management Operator: Rolling Mills | problem solving attitude | 11.93 |
| 1632 | 296 | Fluid Management Operator: Rolling Mills | inventory management | 11.93 |
| 1633 | 296 | Fluid Management Operator: Rolling Mills | sharp reflex | 11.93 |
| 1634 | 296 | Fluid Management Operator: Rolling Mills | analytical skills | 11.93 |
| 1635 | 297 | Fluid Management Operator: Rolling Mills | physical fitness | 27.0 |
| 1636 | 297 | Fluid Management Operator: Rolling Mills | problem solving attitude | 27.0 |
| 1637 | 297 | Fluid Management Operator: Rolling Mills | inventory management | 27.0 |
| 1638 | 297 | Fluid Management Operator: Rolling Mills | sharp reflex | 27.0 |
| 1639 | 297 | Fluid Management Operator: Rolling Mills | analytical skills | 27.0 |
| 1640 | 298 | Refractory Brick Layer | communication related skills | 35.73 |
| 1641 | 298 | Refractory Brick Layer | willingness to work in a factory environment | 35.73 |
| 1642 | 298 | Refractory Brick Layer | high concentration levels | 35.73 |
| 1643 | 299 | Refractory Brick Layer | problem solving attitude | 11.87 |
| 1644 | 299 | Refractory Brick Layer | communication related skills | 11.87 |
| 1645 | 299 | Refractory Brick Layer | high concentration levels | 11.87 |
| 1646 | 300 | Refractory Brick Layer | problem solving attitude | 31.73 |
| 1647 | 300 | Refractory Brick Layer | willingness to work in a factory environment | 31.73 |
| 1648 | 301 | Refractory Brick Layer | problem solving attitude | 40.0 |
| 1649 | 301 | Refractory Brick Layer | willingness to work in a factory environment | 40.0 |
| 1650 | 302 | Refractory Brick Layer | communication related skills | 29.87 |
| 1651 | 302 | Refractory Brick Layer | high concentration levels | 29.87 |
| 1652 | 303 | Fluid Management Operator: Rolling Mills | physical fitness | 18.13 |
| 1653 | 303 | Fluid Management Operator: Rolling Mills | problem solving attitude | 18.13 |
| 1654 | 303 | Fluid Management Operator: Rolling Mills | inventory management | 18.13 |
| 1655 | 303 | Fluid Management Operator: Rolling Mills | sharp reflex | 18.13 |
| 1656 | 303 | Fluid Management Operator: Rolling Mills | analytical skills | 18.13 |
| 1657 | 304 | Refractory Brick Layer | problem solving attitude | 38.13 |
| 1658 | 304 | Refractory Brick Layer | high concentration levels | 38.13 |
| 1659 | 305 | Fluid Management Operator: Rolling Mills | physical fitness | 24.4 |
| 1660 | 305 | Fluid Management Operator: Rolling Mills | problem solving attitude | 24.4 |
| 1661 | 305 | Fluid Management Operator: Rolling Mills | inventory management | 24.4 |
| 1662 | 305 | Fluid Management Operator: Rolling Mills | sharp reflex | 24.4 |
| 1663 | 305 | Fluid Management Operator: Rolling Mills | analytical skills | 24.4 |
| 1664 | 306 | Refractory Brick Layer | problem solving attitude | 41.33 |
| 1665 | 306 | Refractory Brick Layer | communication related skills | 41.33 |
| 1666 | 307 | Fluid Management Operator: Rolling Mills | physical fitness | 15.93 |
| 1667 | 307 | Fluid Management Operator: Rolling Mills | problem solving attitude | 15.93 |
| 1668 | 307 | Fluid Management Operator: Rolling Mills | inventory management | 15.93 |
| 1669 | 307 | Fluid Management Operator: Rolling Mills | sharp reflex | 15.93 |
| 1670 | 307 | Fluid Management Operator: Rolling Mills | analytical skills | 15.93 |
| 1671 | 308 | Refractory Brick Layer | problem solving attitude | 42.67 |
| 1672 | 308 | Refractory Brick Layer | high concentration levels | 42.67 |
| 1673 | 309 | Refractory Brick Layer | communication related skills | 30.33 |
| 1674 | 309 | Refractory Brick Layer | willingness to work in a factory environment | 30.33 |
| 1675 | 309 | Refractory Brick Layer | high concentration levels | 30.33 |
| 1676 | 310 | Refractory Brick Layer | willingness to work in a factory environment | 24.53 |
| 1677 | 310 | Refractory Brick Layer | high concentration levels | 24.53 |
| 1678 | 311 | Refractory Brick Layer | problem solving attitude | 44.0 |
| 1679 | 311 | Refractory Brick Layer | willingness to work in a factory environment | 44.0 |
| 1680 | 312 | Fluid Management Operator: Rolling Mills | physical fitness | 12.2 |
| 1681 | 312 | Fluid Management Operator: Rolling Mills | problem solving attitude | 12.2 |
| 1682 | 312 | Fluid Management Operator: Rolling Mills | inventory management | 12.2 |
| 1683 | 312 | Fluid Management Operator: Rolling Mills | sharp reflex | 12.2 |
| 1684 | 312 | Fluid Management Operator: Rolling Mills | analytical skills | 12.2 |
| 1685 | 313 | Refractory Brick Layer | problem solving attitude | 19.33 |
| 1686 | 313 | Refractory Brick Layer | willingness to work in a factory environment | 19.33 |
| 1687 | 313 | Refractory Brick Layer | communication related skills | 19.33 |
| 1688 | 313 | Refractory Brick Layer | high concentration levels | 19.33 |
| 1689 | 314 | Refractory Brick Layer | problem solving attitude | 23.47 |
| 1690 | 314 | Refractory Brick Layer | willingness to work in a factory environment | 23.47 |
| 1691 | 315 | Refractory Brick Layer | communication related skills | 26.67 |
| 1692 | 315 | Refractory Brick Layer | willingness to work in a factory environment | 26.67 |
| 1693 | 315 | Refractory Brick Layer | high concentration levels | 26.67 |
| 1694 | 316 | Refractory Brick Layer | communication related skills | 33.07 |
| 1695 | 316 | Refractory Brick Layer | high concentration levels | 33.07 |
| 1696 | 317 | Fluid Management Operator: Rolling Mills | physical fitness | 18.07 |
| 1697 | 317 | Fluid Management Operator: Rolling Mills | problem solving attitude | 18.07 |
| 1698 | 317 | Fluid Management Operator: Rolling Mills | inventory management | 18.07 |
| 1699 | 317 | Fluid Management Operator: Rolling Mills | sharp reflex | 18.07 |
| 1700 | 317 | Fluid Management Operator: Rolling Mills | analytical skills | 18.07 |
| 1701 | 318 | Refractory Brick Layer | problem solving attitude | 37.07 |
| 1702 | 318 | Refractory Brick Layer | high concentration levels | 37.07 |
| 1703 | 319 | Fluid Management Operator: Rolling Mills | physical fitness | 37.6 |
| 1704 | 319 | Fluid Management Operator: Rolling Mills | problem solving attitude | 37.6 |
| 1705 | 319 | Fluid Management Operator: Rolling Mills | inventory management | 37.6 |
| 1706 | 319 | Fluid Management Operator: Rolling Mills | sharp reflex | 37.6 |
| 1707 | 319 | Fluid Management Operator: Rolling Mills | analytical skills | 37.6 |
| 1708 | 320 | Refractory Brick Layer | communication related skills | 24.53 |
| 1709 | 320 | Refractory Brick Layer | willingness to work in a factory environment | 24.53 |
| 1710 | 320 | Refractory Brick Layer | high concentration levels | 24.53 |
| 1711 | 321 | Refractory Brick Layer | communication related skills | 29.07 |
| 1712 | 321 | Refractory Brick Layer | willingness to work in a factory environment | 29.07 |
| 1713 | 322 | Refractory Brick Layer | communication related skills | 22.8 |
| 1714 | 322 | Refractory Brick Layer | willingness to work in a factory environment | 22.8 |
| 1715 | 322 | Refractory Brick Layer | high concentration levels | 22.8 |
| 1716 | 323 | Fluid Management Operator: Rolling Mills | physical fitness | 18.33 |
| 1717 | 323 | Fluid Management Operator: Rolling Mills | problem solving attitude | 18.33 |
| 1718 | 323 | Fluid Management Operator: Rolling Mills | inventory management | 18.33 |
| 1719 | 323 | Fluid Management Operator: Rolling Mills | sharp reflex | 18.33 |
| 1720 | 323 | Fluid Management Operator: Rolling Mills | analytical skills | 18.33 |
| 1721 | 324 | Refractory Brick Layer | problem solving attitude | 41.6 |
| 1722 | 324 | Refractory Brick Layer | willingness to work in a factory environment | 41.6 |
| 1723 | 325 | Refractory Brick Layer | communication related skills | 15.6 |
| 1724 | 325 | Refractory Brick Layer | willingness to work in a factory environment | 15.6 |
| 1725 | 325 | Refractory Brick Layer | high concentration levels | 15.6 |
| 1726 | 326 | Refractory Brick Layer | willingness to work in a factory environment | 46.13 |
| 1727 | 326 | Refractory Brick Layer | high concentration levels | 46.13 |
| 1728 | 327 | Refractory Brick Layer | communication related skills | 45.6 |
| 1729 | 327 | Refractory Brick Layer | willingness to work in a factory environment | 45.6 |
| 1730 | 328 | Refractory Brick Layer | communication related skills | 35.47 |
| 1731 | 328 | Refractory Brick Layer | high concentration levels | 35.47 |
| 1732 | 329 | Fluid Management Operator: Rolling Mills | physical fitness | 16.4 |
| 1733 | 329 | Fluid Management Operator: Rolling Mills | problem solving attitude | 16.4 |
| 1734 | 329 | Fluid Management Operator: Rolling Mills | inventory management | 16.4 |
| 1735 | 329 | Fluid Management Operator: Rolling Mills | sharp reflex | 16.4 |
| 1736 | 329 | Fluid Management Operator: Rolling Mills | analytical skills | 16.4 |
| 1737 | 330 | Fluid Management Operator: Rolling Mills | physical fitness | 20.4 |
| 1738 | 330 | Fluid Management Operator: Rolling Mills | problem solving attitude | 20.4 |
| 1739 | 330 | Fluid Management Operator: Rolling Mills | inventory management | 20.4 |
| 1740 | 330 | Fluid Management Operator: Rolling Mills | sharp reflex | 20.4 |
| 1741 | 330 | Fluid Management Operator: Rolling Mills | analytical skills | 20.4 |
| 1742 | 333 | Refractory Brick Layer | communication related skills | 49.47 |
| 1743 | 333 | Refractory Brick Layer | willingness to work in a factory environment | 49.47 |
| 1744 | 333 | Refractory Brick Layer | high concentration levels | 49.47 |
| 1745 | 334 | Refractory Brick Layer | communication related skills | 53.2 |
| 1746 | 334 | Refractory Brick Layer | willingness to work in a factory environment | 53.2 |
| 1747 | 334 | Refractory Brick Layer | high concentration levels | 53.2 |
| 1748 | 335 | Fluid Management Operator: Rolling Mills | physical fitness | 47.47 |
| 1749 | 335 | Fluid Management Operator: Rolling Mills | problem solving attitude | 47.47 |
| 1750 | 335 | Fluid Management Operator: Rolling Mills | inventory management | 47.47 |
| 1751 | 335 | Fluid Management Operator: Rolling Mills | sharp reflex | 47.47 |
| 1752 | 335 | Fluid Management Operator: Rolling Mills | analytical skills | 47.47 |
