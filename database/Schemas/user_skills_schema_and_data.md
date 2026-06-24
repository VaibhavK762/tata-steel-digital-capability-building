# Schema and Data: user_skills

This document provides the database schema and full data dump for the `user_skills` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 3
- **Total Rows:** 789

## SQL Definition
```sql
CREATE TABLE user_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            skill_name TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `user_id` | INTEGER | No | Yes | `NULL` | REFERENCES users(user_id) |
| 2 | `skill_name` | TEXT | No | Yes | `NULL` |  |

## Table Data
| id | user_id | skill_name |
| --- | --- | --- |
| 1 | 1 | tap hole preparation and maintenance |
| 2 | 2 | communication related skills |
| 3 | 2 | high concentration levels |
| 4 | 3 | high concentration levels |
| 5 | 3 | communication related skills |
| 6 | 4 | tap hole preparation and maintenance |
| 7 | 5 | problem solving |
| 8 | 6 | Control system operation |
| 9 | 6 | Control panel operation |
| 10 | 7 | health and safety practices |
| 11 | 7 | problem solving |
| 12 | 8 | material handling |
| 13 | 8 | high concentration levels |
| 14 | 8 | analytical skills |
| 15 | 9 | communication related skills |
| 16 | 9 | willingness to work in a factory environment |
| 17 | 10 | problem solving |
| 18 | 10 | health and safety practices |
| 19 | 11 | communication related skills |
| 20 | 11 | high concentration levels |
| 21 | 12 | analytical skills |
| 22 | 12 | problem solving attitude |
| 23 | 13 | Control system operation |
| 24 | 13 | Computer terminal operation |
| 25 | 14 | analytical skills |
| 26 | 15 | high concentration levels |
| 27 | 15 | physical fitness |
| 28 | 16 | communication related skills |
| 29 | 16 | high concentration levels |
| 30 | 17 | health and safety practices |
| 31 | 17 | analytical skills |
| 32 | 18 | 5S and safety practices |
| 33 | 19 | physical fitness |
| 34 | 19 | problem solving attitude |
| 35 | 20 | problem solving attitude |
| 36 | 20 | willingness to work in a factory environment |
| 37 | 21 | communication related skills |
| 38 | 21 | high concentration levels |
| 39 | 22 | 5S and safety practices |
| 40 | 23 | Control panel operation |
| 41 | 23 | Computer terminal operation |
| 42 | 24 | 5S and safety practices |
| 43 | 25 | 5S and safety practices |
| 44 | 26 | Carrying tools and tackles to job site |
| 45 | 26 | Providing help during dismantling/assembling |
| 46 | 26 | Cleaning assembly before dismantling |
| 47 | 27 | communication related skills |
| 48 | 27 | analytical skills |
| 49 | 28 | communication related skills |
| 50 | 28 | problem solving attitude |
| 51 | 29 | high concentration levels |
| 52 | 29 | willingness to work in a factory environment |
| 53 | 30 | 5S and safety practices |
| 54 | 31 | problem solving attitude |
| 55 | 31 | high concentration levels |
| 56 | 32 | Control panel operation |
| 57 | 32 | Control system operation |
| 58 | 33 | problem solving attitude |
| 59 | 33 | physical fitness |
| 60 | 33 | analytical skills |
| 61 | 34 | Control panel operation |
| 62 | 34 | Control system operation |
| 63 | 35 | analytical skills |
| 64 | 35 | health and safety practices |
| 65 | 36 | analytical skills |
| 66 | 36 | health and safety practices |
| 67 | 37 | problem solving attitude |
| 68 | 37 | physical fitness |
| 69 | 37 | material handling |
| 70 | 38 | Control panel operation |
| 71 | 38 | Computer terminal operation |
| 72 | 39 | communication related skills |
| 73 | 39 | problem solving attitude |
| 74 | 40 | Assisting for smooth and safe operation |
| 75 | 40 | Cleaning work site after job completion |
| 76 | 40 | Carrying tools and tackles to job site |
| 77 | 41 | Providing help during dismantling/assembling |
| 78 | 41 | Cleaning work site after job completion |
| 79 | 42 | high concentration levels |
| 80 | 42 | willingness to work in a factory environment |
| 81 | 43 | problem solving attitude |
| 82 | 43 | high concentration levels |
| 83 | 44 | physical fitness |
| 84 | 44 | analytical skills |
| 85 | 44 | high concentration levels |
| 86 | 45 | analytical skills |
| 87 | 45 | physical fitness |
| 88 | 45 | problem solving attitude |
| 89 | 46 | high concentration levels |
| 90 | 46 | communication related skills |
| 91 | 47 | tap hole preparation and maintenance |
| 92 | 48 | 5S and safety practices |
| 93 | 49 | problem solving attitude |
| 94 | 49 | high concentration levels |
| 95 | 50 | high concentration levels |
| 96 | 50 | material handling |
| 97 | 50 | physical fitness |
| 98 | 51 | high concentration levels |
| 99 | 51 | problem solving attitude |
| 100 | 51 | material handling |
| 101 | 51 | analytical skills |
| 102 | 51 | physical fitness |
| 103 | 52 | Cleaning work site after job completion |
| 104 | 52 | Cleaning assembly before dismantling |
| 105 | 52 | Providing help during dismantling/assembling |
| 106 | 52 | Assisting for smooth and safe operation |
| 107 | 52 | Carrying tools and tackles to job site |
| 108 | 53 | analytical skills |
| 109 | 53 | problem solving |
| 110 | 53 | health and safety practices |
| 111 | 54 | 5S and safety practices |
| 112 | 54 | tap hole preparation and maintenance |
| 113 | 55 | communication related skills |
| 114 | 55 | willingness to work in a factory environment |
| 115 | 55 | high concentration levels |
| 116 | 55 | problem solving attitude |
| 117 | 56 | high concentration levels |
| 118 | 56 | problem solving attitude |
| 119 | 56 | communication related skills |
| 120 | 56 | analytical skills |
| 121 | 57 | problem-solving |
| 122 | 57 | communication |
| 123 | 57 | soldering |
| 124 | 58 | Troubleshooting |
| 125 | 58 | Assembly and disassembly |
| 126 | 59 | communication related skills |
| 127 | 59 | problem solving attitude |
| 128 | 60 | Carry out quality checks |
| 129 | 60 | Prepare for assembling operation |
| 130 | 60 | Perform post - assembly activities |
| 131 | 60 | Carry out housekeeping |
| 132 | 61 | high concentration levels |
| 133 | 61 | analytical skills |
| 134 | 61 | problem solving attitude |
| 135 | 62 | high concentration levels |
| 136 | 62 | communication related skills |
| 137 | 63 | Assembly and disassembly |
| 138 | 63 | Hydraulic equipment maintenance |
| 139 | 64 | Carry out quality checks |
| 140 | 64 | Perform post - assembly activities |
| 141 | 64 | Assemble the electrical components |
| 142 | 64 | Carry out reporting and documentation |
| 143 | 65 | Bearing inspection |
| 144 | 65 | Troubleshooting |
| 145 | 66 | high concentration levels |
| 146 | 66 | problem solving attitude |
| 147 | 67 | mechanical detectors |
| 148 | 67 | inductive detectors |
| 149 | 68 | analytical skills |
| 150 | 68 | problem solving attitude |
| 151 | 69 | Hydraulic equipment maintenance |
| 152 | 69 | Troubleshooting |
| 153 | 70 | high concentration levels |
| 154 | 70 | physical fitness |
| 155 | 71 | analytical skills |
| 156 | 71 | welding |
| 157 | 71 | problem solving attitude |
| 158 | 72 | Perform post - assembly activities |
| 159 | 72 | Assemble the electrical components |
| 160 | 73 | analytical skills |
| 161 | 73 | problem solving attitude |
| 162 | 73 | high concentration levels |
| 163 | 74 | Prepare for assembling operation |
| 164 | 74 | Carry out quality checks |
| 165 | 74 | Carry out housekeeping |
| 166 | 74 | Carry out reporting and documentation |
| 167 | 75 | communication |
| 168 | 75 | wiring |
| 169 | 75 | assembly |
| 170 | 76 | Assembly and disassembly |
| 171 | 76 | Troubleshooting |
| 172 | 77 | wiring |
| 173 | 77 | soldering |
| 174 | 77 | problem-solving |
| 175 | 78 | punching holes in panels |
| 176 | 78 | inductive detectors |
| 177 | 79 | problem solving attitude |
| 178 | 79 | welding |
| 179 | 80 | Troubleshooting |
| 180 | 81 | Assembly and disassembly |
| 181 | 81 | Troubleshooting |
| 182 | 82 | Troubleshooting |
| 183 | 82 | Pneumatic equipment maintenance |
| 184 | 83 | Assembly and disassembly |
| 185 | 84 | Bearing inspection |
| 186 | 84 | Assembly and disassembly |
| 187 | 85 | Bearing maintenance |
| 188 | 85 | Bearing inspection |
| 189 | 86 | high concentration levels |
| 190 | 86 | analytical skills |
| 191 | 86 | working knowledge of tools & fixtures |
| 192 | 87 | analytical skills |
| 193 | 87 | problem solving attitude |
| 194 | 88 | Pneumatic equipment maintenance |
| 195 | 88 | Hydraulic equipment maintenance |
| 196 | 89 | analytical skills |
| 197 | 89 | welding |
| 198 | 89 | machining |
| 199 | 90 | analytical skills |
| 200 | 90 | welding |
| 201 | 90 | problem solving attitude |
| 202 | 91 | Hydraulic equipment maintenance |
| 203 | 92 | communication |
| 204 | 92 | wiring |
| 205 | 92 | problem-solving |
| 206 | 93 | problem-solving |
| 207 | 93 | wiring |
| 208 | 93 | soldering |
| 209 | 94 | Bearing maintenance |
| 210 | 94 | Troubleshooting |
| 211 | 95 | working knowledge of tools & fixtures |
| 212 | 95 | physical fitness |
| 213 | 96 | mechanical detectors |
| 214 | 96 | inductive detectors |
| 215 | 97 | physical fitness |
| 216 | 97 | problem solving attitude |
| 217 | 97 | analytical skills |
| 218 | 98 | Hydraulic equipment maintenance |
| 219 | 98 | Troubleshooting |
| 220 | 99 | Carry out housekeeping |
| 221 | 99 | Perform post - assembly activities |
| 222 | 99 | Carry out quality checks |
| 223 | 99 | Assemble the electrical components |
| 224 | 100 | high concentration levels |
| 225 | 100 | problem solving attitude |
| 226 | 101 | analytical skills |
| 227 | 101 | working knowledge of tools & fixtures |
| 228 | 101 | physical fitness |
| 229 | 102 | physical fitness |
| 230 | 102 | high concentration levels |
| 231 | 103 | Bearing inspection |
| 232 | 103 | Assembly and disassembly |
| 233 | 104 | Pneumatic equipment maintenance |
| 234 | 104 | Hydraulic equipment maintenance |
| 235 | 105 | welding |
| 236 | 105 | machining |
| 237 | 105 | analytical skills |
| 238 | 106 | problem-solving |
| 239 | 106 | wiring |
| 240 | 106 | communication |
| 241 | 107 | Carry out housekeeping |
| 242 | 107 | Assemble the electrical components |
| 243 | 107 | Prepare for assembling operation |
| 244 | 107 | Carry out reporting and documentation |
| 245 | 107 | Carry out quality checks |
| 246 | 107 | Perform post - assembly activities |
| 247 | 108 | communication |
| 248 | 108 | assembly |
| 249 | 108 | problem-solving |
| 250 | 108 | soldering |
| 251 | 108 | wiring |
| 252 | 109 | machining |
| 253 | 109 | welding |
| 254 | 109 | problem solving attitude |
| 255 | 109 | analytical skills |
| 256 | 109 | high concentration levels |
| 257 | 110 | analytical skills |
| 258 | 110 | problem solving attitude |
| 259 | 110 | machining |
| 260 | 110 | welding |
| 261 | 110 | high concentration levels |
| 262 | 111 | problem solving attitude |
| 263 | 111 | analytical skills |
| 264 | 111 | high concentration levels |
| 265 | 111 | communication related skills |
| 266 | 112 | Assembly and disassembly |
| 267 | 112 | Bearing inspection |
| 268 | 112 | Troubleshooting |
| 269 | 112 | Bearing maintenance |
| 270 | 113 | problem solving |
| 271 | 114 | communication related skills |
| 272 | 115 | health and safety practices |
| 273 | 115 | problem solving |
| 274 | 116 | health and safety practices |
| 275 | 116 | analytical skills |
| 276 | 117 | problem solving |
| 277 | 118 | communication related skills |
| 278 | 119 | 5S and safety practices |
| 279 | 119 | traffic signals |
| 280 | 120 | analytical skills |
| 281 | 120 | communication related skills |
| 282 | 121 | health and safety practices |
| 283 | 121 | problem solving |
| 284 | 122 | problem solving |
| 285 | 123 | routine inspection |
| 286 | 123 | 5S and safety practices |
| 287 | 124 | health and safety practices |
| 288 | 124 | problem solving |
| 289 | 125 | high concentration levels |
| 290 | 125 | communication related skills |
| 291 | 126 | analytical skills |
| 292 | 126 | problem solving attitude |
| 293 | 127 | communication related skills |
| 294 | 127 | problem solving attitude |
| 295 | 128 | problem solving |
| 296 | 129 | high concentration levels |
| 297 | 129 | problem solving attitude |
| 298 | 130 | 5S and safety practices |
| 299 | 131 | health and safety practices |
| 300 | 131 | analytical skills |
| 301 | 132 | traffic signals |
| 302 | 133 | analytical skills |
| 303 | 133 | problem solving attitude |
| 304 | 134 | problem solving attitude |
| 305 | 134 | communication related skills |
| 306 | 135 | traffic signals |
| 307 | 135 | 5S and safety practices |
| 308 | 136 | analytical skills |
| 309 | 136 | problem solving attitude |
| 310 | 137 | communication related skills |
| 311 | 137 | analytical skills |
| 312 | 138 | high concentration levels |
| 313 | 138 | analytical skills |
| 314 | 139 | problem solving |
| 315 | 140 | problem solving |
| 316 | 140 | analytical skills |
| 317 | 141 | 5S and safety practices |
| 318 | 141 | routine inspection |
| 319 | 142 | communication related skills |
| 320 | 142 | problem solving attitude |
| 321 | 143 | routine inspection |
| 322 | 143 | traffic signals |
| 323 | 144 | analytical skills |
| 324 | 144 | high concentration levels |
| 325 | 145 | problem solving |
| 326 | 145 | health and safety practices |
| 327 | 146 | problem solving attitude |
| 328 | 146 | analytical skills |
| 329 | 147 | analytical skills |
| 330 | 147 | high concentration levels |
| 331 | 148 | problem solving attitude |
| 332 | 148 | high concentration levels |
| 333 | 149 | 5S and safety practices |
| 334 | 150 | communication related skills |
| 335 | 150 | problem solving |
| 336 | 151 | 5S and safety practices |
| 337 | 152 | problem solving attitude |
| 338 | 152 | high concentration levels |
| 339 | 153 | communication related skills |
| 340 | 153 | high concentration levels |
| 341 | 154 | analytical skills |
| 342 | 154 | problem solving |
| 343 | 155 | problem solving |
| 344 | 155 | communication related skills |
| 345 | 156 | traffic signals |
| 346 | 157 | problem solving attitude |
| 347 | 157 | high concentration levels |
| 348 | 158 | analytical skills |
| 349 | 158 | problem solving attitude |
| 350 | 159 | problem solving attitude |
| 351 | 159 | communication related skills |
| 352 | 160 | 5S and safety practices |
| 353 | 160 | traffic signals |
| 354 | 161 | 5S and safety practices |
| 355 | 161 | traffic signals |
| 356 | 162 | problem solving attitude |
| 357 | 162 | communication related skills |
| 358 | 163 | routine inspection |
| 359 | 163 | traffic signals |
| 360 | 163 | 5S and safety practices |
| 361 | 164 | problem solving |
| 362 | 164 | health and safety practices |
| 363 | 164 | analytical skills |
| 364 | 165 | problem solving |
| 365 | 165 | analytical skills |
| 366 | 165 | communication related skills |
| 367 | 166 | high concentration levels |
| 368 | 166 | problem solving attitude |
| 369 | 166 | analytical skills |
| 370 | 166 | communication related skills |
| 371 | 167 | communication related skills |
| 372 | 167 | high concentration levels |
| 373 | 167 | problem solving attitude |
| 374 | 167 | analytical skills |
| 375 | 168 | problem solving attitude |
| 376 | 168 | high concentration levels |
| 377 | 168 | communication related skills |
| 378 | 168 | analytical skills |
| 379 | 169 | hands on training |
| 380 | 169 | job specific safety training |
| 381 | 170 | basic computer operations |
| 382 | 170 | job specific safety training |
| 383 | 171 | hands on training |
| 384 | 171 | basic computer operations |
| 385 | 172 | hands on training |
| 386 | 172 | job specific safety training |
| 387 | 173 | job specific safety training |
| 388 | 173 | hands on training |
| 389 | 174 | basic computer operations |
| 390 | 174 | job specific safety training |
| 391 | 175 | job specific safety training |
| 392 | 175 | hands on training |
| 393 | 176 | hands on training |
| 394 | 176 | job specific safety training |
| 395 | 177 | hands on training |
| 396 | 177 | basic computer operations |
| 397 | 178 | hands on training |
| 398 | 178 | job specific safety training |
| 399 | 179 | job specific safety training |
| 400 | 179 | basic computer operations |
| 401 | 180 | basic computer operations |
| 402 | 180 | hands on training |
| 403 | 181 | basic computer operations |
| 404 | 181 | hands on training |
| 405 | 182 | job specific safety training |
| 406 | 182 | hands on training |
| 407 | 183 | basic computer operations |
| 408 | 183 | hands on training |
| 409 | 184 | basic computer operations |
| 410 | 184 | hands on training |
| 411 | 185 | hands on training |
| 412 | 186 | basic computer operations |
| 413 | 186 | job specific safety training |
| 414 | 187 | basic computer operations |
| 415 | 187 | hands on training |
| 416 | 188 | hands on training |
| 417 | 188 | job specific safety training |
| 418 | 189 | job specific safety training |
| 419 | 189 | hands on training |
| 420 | 190 | basic computer operations |
| 421 | 191 | basic computer operations |
| 422 | 191 | job specific safety training |
| 423 | 192 | hands on training |
| 424 | 192 | basic computer operations |
| 425 | 193 | basic computer operations |
| 426 | 193 | job specific safety training |
| 427 | 194 | job specific safety training |
| 428 | 194 | basic computer operations |
| 429 | 195 | hands on training |
| 430 | 195 | job specific safety training |
| 431 | 196 | basic computer operations |
| 432 | 196 | hands on training |
| 433 | 197 | job specific safety training |
| 434 | 197 | basic computer operations |
| 435 | 198 | hands on training |
| 436 | 198 | job specific safety training |
| 437 | 199 | job specific safety training |
| 438 | 199 | basic computer operations |
| 439 | 200 | basic computer operations |
| 440 | 200 | job specific safety training |
| 441 | 201 | basic computer operations |
| 442 | 201 | hands on training |
| 443 | 202 | basic computer operations |
| 444 | 202 | hands on training |
| 445 | 203 | basic computer operations |
| 446 | 203 | hands on training |
| 447 | 204 | job specific safety training |
| 448 | 204 | basic computer operations |
| 449 | 205 | hands on training |
| 450 | 205 | job specific safety training |
| 451 | 206 | basic computer operations |
| 452 | 206 | job specific safety training |
| 453 | 207 | hands on training |
| 454 | 207 | basic computer operations |
| 455 | 208 | job specific safety training |
| 456 | 208 | basic computer operations |
| 457 | 209 | job specific safety training |
| 458 | 210 | hands on training |
| 459 | 210 | basic computer operations |
| 460 | 211 | job specific safety training |
| 461 | 211 | basic computer operations |
| 462 | 212 | job specific safety training |
| 463 | 213 | basic computer operations |
| 464 | 213 | job specific safety training |
| 465 | 214 | basic computer operations |
| 466 | 214 | job specific safety training |
| 467 | 215 | job specific safety training |
| 468 | 215 | hands on training |
| 469 | 216 | hands on training |
| 470 | 216 | basic computer operations |
| 471 | 217 | job specific safety training |
| 472 | 218 | basic computer operations |
| 473 | 218 | hands on training |
| 474 | 219 | job specific safety training |
| 475 | 219 | basic computer operations |
| 476 | 219 | hands on training |
| 477 | 220 | job specific safety training |
| 478 | 220 | hands on training |
| 479 | 220 | basic computer operations |
| 480 | 221 | basic computer operations |
| 481 | 221 | hands on training |
| 482 | 221 | job specific safety training |
| 483 | 222 | job specific safety training |
| 484 | 222 | basic computer operations |
| 485 | 222 | hands on training |
| 486 | 223 | basic computer operations |
| 487 | 223 | job specific safety training |
| 488 | 223 | hands on training |
| 489 | 224 | job specific safety training |
| 490 | 224 | basic computer operations |
| 491 | 224 | hands on training |
| 492 | 225 | Tungsten Inert Arc Welding (GTAW) |
| 493 | 225 | Gas Tungsten Arc Welding (GTAW) |
| 494 | 226 | faulty technique and their effects |
| 495 | 227 | Tungsten Inert Arc Welding (GTAW) |
| 496 | 227 | Welding Procedure Specification |
| 497 | 228 | faulty technique and their effects |
| 498 | 229 | Gas Tungsten Arc Welding (GTAW) |
| 499 | 229 | Tungsten Inert Arc Welding (GTAW) |
| 500 | 230 | problem solving attitude |
| 501 | 230 | communication related skills |
| 502 | 231 | plasma arc cutting technique |
| 503 | 232 | problem solving attitude |
| 504 | 232 | willingness to work in a factory environment |
| 505 | 233 | plasma arc cutting technique |
| 506 | 234 | Welding Procedure Specification |
| 507 | 234 | Gas Tungsten Arc Welding (GTAW) |
| 508 | 235 | problem solving attitude |
| 509 | 235 | high concentration levels |
| 510 | 236 | willingness to work in a factory environment |
| 511 | 236 | problem solving attitude |
| 512 | 237 | willingness to work in a factory environment |
| 513 | 237 | communication related skills |
| 514 | 238 | plasma arc cutting technique |
| 515 | 239 | communication related skills |
| 516 | 240 | communication related skills |
| 517 | 240 | problem solving attitude |
| 518 | 241 | problem solving attitude |
| 519 | 241 | communication related skills |
| 520 | 242 | willingness to work in a factory environment |
| 521 | 242 | communication related skills |
| 522 | 243 | plasma arc cutting technique |
| 523 | 244 | plasma arc cutting technique |
| 524 | 245 | faulty technique and their effects |
| 525 | 246 | Gas Tungsten Arc Welding (GTAW) |
| 526 | 246 | Welding Procedure Specification |
| 527 | 247 | high concentration levels |
| 528 | 247 | problem solving attitude |
| 529 | 248 | Welding Procedure Specification |
| 530 | 248 | Welding joints |
| 531 | 249 | willingness to work in a factory environment |
| 532 | 249 | communication related skills |
| 533 | 250 | faulty technique and their effects |
| 534 | 251 | faulty technique and their effects |
| 535 | 252 | Welding joints |
| 536 | 252 | Tungsten Inert Arc Welding (GTAW) |
| 537 | 253 | Welding joints |
| 538 | 253 | Welding Procedure Specification |
| 539 | 254 | faulty technique and their effects |
| 540 | 255 | plasma arc cutting technique |
| 541 | 256 | faulty technique and their effects |
| 542 | 257 | Welding Procedure Specification |
| 543 | 257 | Tungsten Inert Arc Welding (GTAW) |
| 544 | 258 | Welding joints |
| 545 | 258 | Tungsten Inert Arc Welding (GTAW) |
| 546 | 259 | faulty technique and their effects |
| 547 | 260 | Welding joints |
| 548 | 260 | Gas Tungsten Arc Welding (GTAW) |
| 549 | 261 | plasma arc cutting technique |
| 550 | 262 | Gas Tungsten Arc Welding (GTAW) |
| 551 | 263 | Gas Tungsten Arc Welding (GTAW) |
| 552 | 263 | Tungsten Inert Arc Welding (GTAW) |
| 553 | 264 | faulty technique and their effects |
| 554 | 265 | plasma arc cutting technique |
| 555 | 266 | problem solving attitude |
| 556 | 266 | communication related skills |
| 557 | 267 | faulty technique and their effects |
| 558 | 268 | faulty technique and their effects |
| 559 | 269 | faulty technique and their effects |
| 560 | 270 | willingness to work in a factory environment |
| 561 | 270 | problem solving attitude |
| 562 | 271 | Tungsten Inert Arc Welding (GTAW) |
| 563 | 271 | Welding Procedure Specification |
| 564 | 272 | faulty technique and their effects |
| 565 | 273 | willingness to work in a factory environment |
| 566 | 273 | high concentration levels |
| 567 | 274 | Tungsten Inert Arc Welding (GTAW) |
| 568 | 275 | willingness to work in a factory environment |
| 569 | 275 | problem solving attitude |
| 570 | 275 | communication related skills |
| 571 | 275 | high concentration levels |
| 572 | 276 | high concentration levels |
| 573 | 276 | problem solving attitude |
| 574 | 276 | willingness to work in a factory environment |
| 575 | 276 | communication related skills |
| 576 | 277 | Welding Procedure Specification |
| 577 | 277 | Tungsten Inert Arc Welding (GTAW) |
| 578 | 277 | Gas Tungsten Arc Welding (GTAW) |
| 579 | 277 | Welding joints |
| 580 | 278 | willingness to work in a factory environment |
| 581 | 278 | communication related skills |
| 582 | 278 | problem solving attitude |
| 583 | 278 | high concentration levels |
| 584 | 279 | willingness to work in a factory environment |
| 585 | 279 | high concentration levels |
| 586 | 279 | communication related skills |
| 587 | 279 | problem solving attitude |
| 588 | 280 | problem solving attitude |
| 589 | 280 | high concentration levels |
| 590 | 280 | communication related skills |
| 591 | 280 | willingness to work in a factory environment |
| 592 | 281 | communication related skills |
| 593 | 281 | willingness to work in a factory environment |
| 594 | 282 | sharp reflex |
| 595 | 282 | problem solving attitude |
| 596 | 282 | inventory management |
| 597 | 283 | Troubleshooting |
| 598 | 283 | Inspection |
| 599 | 283 | Following instructions |
| 600 | 283 | Belt operation |
| 601 | 283 | Safety practices |
| 602 | 284 | problem solving attitude |
| 603 | 284 | sharp reflex |
| 604 | 284 | inventory management |
| 605 | 285 | physical fitness |
| 606 | 285 | sharp reflex |
| 607 | 285 | problem solving attitude |
| 608 | 286 | willingness to work in a factory environment |
| 609 | 286 | problem solving attitude |
| 610 | 287 | communication related skills |
| 611 | 287 | problem solving attitude |
| 612 | 288 | Inspection |
| 613 | 288 | Safety practices |
| 614 | 288 | Maintenance techniques |
| 615 | 288 | Following instructions |
| 616 | 288 | Troubleshooting |
| 617 | 289 | Belt operation |
| 618 | 289 | Safety practices |
| 619 | 289 | Inspection |
| 620 | 289 | Troubleshooting |
| 621 | 289 | Maintenance techniques |
| 622 | 290 | Belt operation |
| 623 | 290 | Basic maintenance |
| 624 | 290 | Inspection |
| 625 | 290 | Maintenance techniques |
| 626 | 290 | Troubleshooting |
| 627 | 291 | Belt operation |
| 628 | 291 | Basic maintenance |
| 629 | 291 | Following instructions |
| 630 | 291 | Inspection |
| 631 | 291 | Troubleshooting |
| 632 | 292 | Following instructions |
| 633 | 292 | Safety practices |
| 634 | 292 | Troubleshooting |
| 635 | 292 | Troubleshooting |
| 636 | 292 | Basic maintenance |
| 637 | 293 | inventory management |
| 638 | 293 | analytical skills |
| 639 | 293 | sharp reflex |
| 640 | 294 | Maintenance techniques |
| 641 | 294 | Inspection |
| 642 | 294 | Following instructions |
| 643 | 294 | Troubleshooting |
| 644 | 294 | Troubleshooting |
| 645 | 295 | willingness to work in a factory environment |
| 646 | 295 | problem solving attitude |
| 647 | 296 | Belt operation |
| 648 | 296 | Inspection |
| 649 | 296 | Maintenance techniques |
| 650 | 296 | Basic maintenance |
| 651 | 296 | Troubleshooting |
| 652 | 297 | Maintenance techniques |
| 653 | 297 | Troubleshooting |
| 654 | 297 | Safety practices |
| 655 | 297 | Following instructions |
| 656 | 297 | Inspection |
| 657 | 298 | inventory management |
| 658 | 298 | analytical skills |
| 659 | 298 | problem solving attitude |
| 660 | 299 | willingness to work in a factory environment |
| 661 | 300 | high concentration levels |
| 662 | 300 | communication related skills |
| 663 | 301 | high concentration levels |
| 664 | 301 | communication related skills |
| 665 | 302 | willingness to work in a factory environment |
| 666 | 302 | problem solving attitude |
| 667 | 303 | Basic maintenance |
| 668 | 303 | Belt operation |
| 669 | 303 | Troubleshooting |
| 670 | 303 | Troubleshooting |
| 671 | 303 | Following instructions |
| 672 | 304 | willingness to work in a factory environment |
| 673 | 304 | communication related skills |
| 674 | 305 | Maintenance techniques |
| 675 | 305 | Following instructions |
| 676 | 305 | Troubleshooting |
| 677 | 305 | Belt operation |
| 678 | 305 | Safety practices |
| 679 | 306 | willingness to work in a factory environment |
| 680 | 306 | high concentration levels |
| 681 | 307 | Maintenance techniques |
| 682 | 307 | Troubleshooting |
| 683 | 307 | Basic maintenance |
| 684 | 307 | Inspection |
| 685 | 307 | Troubleshooting |
| 686 | 308 | willingness to work in a factory environment |
| 687 | 308 | communication related skills |
| 688 | 309 | sharp reflex |
| 689 | 309 | inventory management |
| 690 | 309 | problem solving attitude |
| 691 | 310 | communication related skills |
| 692 | 310 | problem solving attitude |
| 693 | 311 | high concentration levels |
| 694 | 311 | communication related skills |
| 695 | 312 | Following instructions |
| 696 | 312 | Basic maintenance |
| 697 | 312 | Troubleshooting |
| 698 | 312 | Safety practices |
| 699 | 312 | Maintenance techniques |
| 700 | 313 | physical fitness |
| 701 | 313 | inventory management |
| 702 | 313 | sharp reflex |
| 703 | 314 | communication related skills |
| 704 | 314 | high concentration levels |
| 705 | 315 | problem solving attitude |
| 706 | 315 | analytical skills |
| 707 | 315 | sharp reflex |
| 708 | 316 | willingness to work in a factory environment |
| 709 | 316 | problem solving attitude |
| 710 | 317 | Belt operation |
| 711 | 317 | Safety practices |
| 712 | 317 | Following instructions |
| 713 | 317 | Troubleshooting |
| 714 | 317 | Maintenance techniques |
| 715 | 318 | communication related skills |
| 716 | 318 | willingness to work in a factory environment |
| 717 | 319 | Maintenance techniques |
| 718 | 319 | Basic maintenance |
| 719 | 319 | Belt operation |
| 720 | 319 | Troubleshooting |
| 721 | 319 | Troubleshooting |
| 722 | 320 | inventory management |
| 723 | 320 | physical fitness |
| 724 | 320 | problem solving attitude |
| 725 | 321 | high concentration levels |
| 726 | 321 | problem solving attitude |
| 727 | 322 | inventory management |
| 728 | 322 | physical fitness |
| 729 | 322 | problem solving attitude |
| 730 | 323 | Following instructions |
| 731 | 323 | Troubleshooting |
| 732 | 323 | Troubleshooting |
| 733 | 323 | Safety practices |
| 734 | 323 | Basic maintenance |
| 735 | 324 | communication related skills |
| 736 | 324 | high concentration levels |
| 737 | 325 | problem solving attitude |
| 738 | 325 | physical fitness |
| 739 | 325 | analytical skills |
| 740 | 326 | problem solving attitude |
| 741 | 326 | communication related skills |
| 742 | 327 | problem solving attitude |
| 743 | 327 | high concentration levels |
| 744 | 328 | willingness to work in a factory environment |
| 745 | 328 | problem solving attitude |
| 746 | 329 | Maintenance techniques |
| 747 | 329 | Inspection |
| 748 | 329 | Basic maintenance |
| 749 | 329 | Troubleshooting |
| 750 | 329 | Safety practices |
| 751 | 330 | Safety practices |
| 752 | 330 | Basic maintenance |
| 753 | 330 | Troubleshooting |
| 754 | 330 | Inspection |
| 755 | 330 | Troubleshooting |
| 756 | 331 | high concentration levels |
| 757 | 331 | communication related skills |
| 758 | 331 | willingness to work in a factory environment |
| 759 | 331 | problem solving attitude |
| 760 | 332 | problem solving attitude |
| 761 | 332 | high concentration levels |
| 762 | 332 | willingness to work in a factory environment |
| 763 | 332 | communication related skills |
| 764 | 333 | analytical skills |
| 765 | 333 | physical fitness |
| 766 | 333 | problem solving attitude |
| 767 | 333 | sharp reflex |
| 768 | 333 | inventory management |
| 769 | 334 | physical fitness |
| 770 | 334 | problem solving attitude |
| 771 | 334 | analytical skills |
| 772 | 334 | sharp reflex |
| 773 | 334 | inventory management |
| 774 | 335 | Basic maintenance |
| 775 | 335 | Troubleshooting |
| 776 | 335 | Inspection |
| 777 | 335 | Belt operation |
| 778 | 335 | Maintenance techniques |
| 779 | 335 | Safety practices |
| 780 | 335 | Troubleshooting |
| 781 | 335 | Following instructions |
| 782 | 336 | Troubleshooting |
| 783 | 336 | Troubleshooting |
| 784 | 336 | Maintenance techniques |
| 785 | 336 | Following instructions |
| 786 | 336 | Inspection |
| 787 | 336 | Belt operation |
| 788 | 336 | Safety practices |
| 789 | 336 | Basic maintenance |
