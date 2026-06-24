# Schema and Data: recommendations

This document provides the database schema and full data dump for the `recommendations` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 5
- **Total Rows:** 2640

## SQL Definition
```sql
CREATE TABLE recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    course_id TEXT,
    reason TEXT,
    priority TEXT
)
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `user_id` | INTEGER | No | Yes | `NULL` |  |
| 2 | `course_id` | TEXT | No | Yes | `NULL` |  |
| 3 | `reason` | TEXT | No | Yes | `NULL` |  |
| 4 | `priority` | TEXT | No | Yes | `NULL` |  |

## Table Data
| id | user_id | course_id | reason | priority |
| --- | --- | --- | --- | --- |
| 113 | 1 | C001 | Required for target role: Cast House Senior Operator | High |
| 114 | 1 | C002 | Required for target role: Cast House Senior Operator | High |
| 115 | 1 | C003 | Required for target role: Cast House Senior Operator | High |
| 116 | 1 | C004 | Required for target role: Cast House Senior Operator | High |
| 117 | 1 | C006 | Required for target role: Cast House Senior Operator | High |
| 118 | 1 | C032 | Required for target role: Cast House Senior Operator | High |
| 119 | 1 | C033 | Required for target role: Cast House Senior Operator | High |
| 120 | 1 | C034 | Required for target role: Cast House Senior Operator | High |
| 121 | 2 | C001 | Required for target role: Control Room Operator | High |
| 122 | 2 | C002 | Required for target role: Control Room Operator | High |
| 123 | 2 | C003 | Required for target role: Control Room Operator | High |
| 124 | 2 | C004 | Required for target role: Control Room Operator | High |
| 125 | 2 | C008 | Required for target role: Control Room Operator | High |
| 126 | 2 | C032 | Required for target role: Control Room Operator | High |
| 127 | 2 | C033 | Required for target role: Control Room Operator | High |
| 128 | 2 | C034 | Required for target role: Control Room Operator | High |
| 129 | 3 | C001 | Required for target role: Heating Regulator | High |
| 130 | 3 | C002 | Required for target role: Heating Regulator | High |
| 131 | 3 | C003 | Required for target role: Heating Regulator | High |
| 132 | 3 | C004 | Required for target role: Heating Regulator | High |
| 133 | 3 | C007 | Required for target role: Heating Regulator | High |
| 134 | 3 | C032 | Required for target role: Heating Regulator | High |
| 135 | 3 | C033 | Required for target role: Heating Regulator | High |
| 136 | 3 | C034 | Required for target role: Heating Regulator | High |
| 137 | 4 | C001 | Required for target role: Cast House Senior Operator | High |
| 138 | 4 | C002 | Required for target role: Cast House Senior Operator | High |
| 139 | 4 | C003 | Required for target role: Cast House Senior Operator | High |
| 140 | 4 | C004 | Required for target role: Cast House Senior Operator | High |
| 141 | 4 | C006 | Required for target role: Cast House Senior Operator | High |
| 142 | 4 | C032 | Required for target role: Cast House Senior Operator | High |
| 143 | 4 | C033 | Required for target role: Cast House Senior Operator | High |
| 144 | 4 | C034 | Required for target role: Cast House Senior Operator | High |
| 145 | 5 | C001 | Required for target role: Control Room Operator | High |
| 146 | 5 | C002 | Required for target role: Control Room Operator | High |
| 147 | 5 | C003 | Required for target role: Control Room Operator | High |
| 148 | 5 | C004 | Required for target role: Control Room Operator | High |
| 149 | 5 | C008 | Required for target role: Control Room Operator | High |
| 150 | 5 | C032 | Required for target role: Control Room Operator | High |
| 151 | 5 | C033 | Required for target role: Control Room Operator | High |
| 152 | 5 | C034 | Required for target role: Control Room Operator | High |
| 153 | 6 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 154 | 6 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 155 | 6 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 156 | 6 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 157 | 6 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 158 | 6 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 159 | 6 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 160 | 6 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 161 | 7 | C001 | Required for target role: Control Room Operator | High |
| 162 | 7 | C002 | Required for target role: Control Room Operator | High |
| 163 | 7 | C003 | Required for target role: Control Room Operator | High |
| 164 | 7 | C004 | Required for target role: Control Room Operator | High |
| 165 | 7 | C008 | Required for target role: Control Room Operator | High |
| 166 | 7 | C032 | Required for target role: Control Room Operator | High |
| 167 | 7 | C033 | Required for target role: Control Room Operator | High |
| 168 | 7 | C034 | Required for target role: Control Room Operator | High |
| 169 | 8 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 170 | 8 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 171 | 8 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 172 | 8 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 173 | 8 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 174 | 8 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 175 | 8 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 176 | 8 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 177 | 9 | C001 | Required for target role: Control Room Operator | High |
| 178 | 9 | C002 | Required for target role: Control Room Operator | High |
| 179 | 9 | C003 | Required for target role: Control Room Operator | High |
| 180 | 9 | C004 | Required for target role: Control Room Operator | High |
| 181 | 9 | C008 | Required for target role: Control Room Operator | High |
| 182 | 9 | C032 | Required for target role: Control Room Operator | High |
| 183 | 9 | C033 | Required for target role: Control Room Operator | High |
| 184 | 9 | C034 | Required for target role: Control Room Operator | High |
| 185 | 10 | C001 | Required for target role: Control Room Operator | High |
| 186 | 10 | C002 | Required for target role: Control Room Operator | High |
| 187 | 10 | C003 | Required for target role: Control Room Operator | High |
| 188 | 10 | C004 | Required for target role: Control Room Operator | High |
| 189 | 10 | C008 | Required for target role: Control Room Operator | High |
| 190 | 10 | C032 | Required for target role: Control Room Operator | High |
| 191 | 10 | C033 | Required for target role: Control Room Operator | High |
| 192 | 10 | C034 | Required for target role: Control Room Operator | High |
| 193 | 11 | C001 | Required for target role: Heating Regulator | High |
| 194 | 11 | C002 | Required for target role: Heating Regulator | High |
| 195 | 11 | C003 | Required for target role: Heating Regulator | High |
| 196 | 11 | C004 | Required for target role: Heating Regulator | High |
| 197 | 11 | C007 | Required for target role: Heating Regulator | High |
| 198 | 11 | C032 | Required for target role: Heating Regulator | High |
| 199 | 11 | C033 | Required for target role: Heating Regulator | High |
| 200 | 11 | C034 | Required for target role: Heating Regulator | High |
| 201 | 12 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 202 | 12 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 203 | 12 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 204 | 12 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 205 | 12 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 206 | 12 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 207 | 12 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 208 | 12 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 209 | 13 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 210 | 13 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 211 | 13 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 212 | 13 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 213 | 13 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 214 | 13 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 215 | 13 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 216 | 13 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 217 | 14 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 218 | 14 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 219 | 14 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 220 | 14 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 221 | 14 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 222 | 14 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 223 | 14 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 224 | 14 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 225 | 15 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 226 | 15 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 227 | 15 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 228 | 15 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 229 | 15 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 230 | 15 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 231 | 15 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 232 | 15 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 233 | 16 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 234 | 16 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 235 | 16 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 236 | 16 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 237 | 16 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 238 | 16 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 239 | 16 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 240 | 16 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 241 | 17 | C001 | Required for target role: Control Room Operator | High |
| 242 | 17 | C002 | Required for target role: Control Room Operator | High |
| 243 | 17 | C003 | Required for target role: Control Room Operator | High |
| 244 | 17 | C004 | Required for target role: Control Room Operator | High |
| 245 | 17 | C008 | Required for target role: Control Room Operator | High |
| 246 | 17 | C032 | Required for target role: Control Room Operator | High |
| 247 | 17 | C033 | Required for target role: Control Room Operator | High |
| 248 | 17 | C034 | Required for target role: Control Room Operator | High |
| 249 | 18 | C001 | Required for target role: Cast House Senior Operator | High |
| 250 | 18 | C002 | Required for target role: Cast House Senior Operator | High |
| 251 | 18 | C003 | Required for target role: Cast House Senior Operator | High |
| 252 | 18 | C004 | Required for target role: Cast House Senior Operator | High |
| 253 | 18 | C006 | Required for target role: Cast House Senior Operator | High |
| 254 | 18 | C032 | Required for target role: Cast House Senior Operator | High |
| 255 | 18 | C033 | Required for target role: Cast House Senior Operator | High |
| 256 | 18 | C034 | Required for target role: Cast House Senior Operator | High |
| 257 | 19 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 258 | 19 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 259 | 19 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 260 | 19 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 261 | 19 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 262 | 19 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 263 | 19 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 264 | 19 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 265 | 20 | C001 | Required for target role: Control Room Operator | High |
| 266 | 20 | C002 | Required for target role: Control Room Operator | High |
| 267 | 20 | C003 | Required for target role: Control Room Operator | High |
| 268 | 20 | C004 | Required for target role: Control Room Operator | High |
| 269 | 20 | C008 | Required for target role: Control Room Operator | High |
| 270 | 20 | C032 | Required for target role: Control Room Operator | High |
| 271 | 20 | C033 | Required for target role: Control Room Operator | High |
| 272 | 20 | C034 | Required for target role: Control Room Operator | High |
| 273 | 21 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 274 | 21 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 275 | 21 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 276 | 21 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 277 | 21 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 278 | 21 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 279 | 21 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 280 | 21 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 281 | 22 | C001 | Required for target role: Cast House Senior Operator | High |
| 282 | 22 | C002 | Required for target role: Cast House Senior Operator | High |
| 283 | 22 | C003 | Required for target role: Cast House Senior Operator | High |
| 284 | 22 | C004 | Required for target role: Cast House Senior Operator | High |
| 285 | 22 | C006 | Required for target role: Cast House Senior Operator | High |
| 286 | 22 | C032 | Required for target role: Cast House Senior Operator | High |
| 287 | 22 | C033 | Required for target role: Cast House Senior Operator | High |
| 288 | 22 | C034 | Required for target role: Cast House Senior Operator | High |
| 289 | 23 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 290 | 23 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 291 | 23 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 292 | 23 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 293 | 23 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 294 | 23 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 295 | 23 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 296 | 23 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 297 | 24 | C001 | Required for target role: Cast House Senior Operator | High |
| 298 | 24 | C002 | Required for target role: Cast House Senior Operator | High |
| 299 | 24 | C003 | Required for target role: Cast House Senior Operator | High |
| 300 | 24 | C004 | Required for target role: Cast House Senior Operator | High |
| 301 | 24 | C006 | Required for target role: Cast House Senior Operator | High |
| 302 | 24 | C032 | Required for target role: Cast House Senior Operator | High |
| 303 | 24 | C033 | Required for target role: Cast House Senior Operator | High |
| 304 | 24 | C034 | Required for target role: Cast House Senior Operator | High |
| 305 | 25 | C001 | Required for target role: Cast House Senior Operator | High |
| 306 | 25 | C002 | Required for target role: Cast House Senior Operator | High |
| 307 | 25 | C003 | Required for target role: Cast House Senior Operator | High |
| 308 | 25 | C004 | Required for target role: Cast House Senior Operator | High |
| 309 | 25 | C006 | Required for target role: Cast House Senior Operator | High |
| 310 | 25 | C032 | Required for target role: Cast House Senior Operator | High |
| 311 | 25 | C033 | Required for target role: Cast House Senior Operator | High |
| 312 | 25 | C034 | Required for target role: Cast House Senior Operator | High |
| 313 | 26 | C001 | Required for target role: Cast House Junior Operator | High |
| 314 | 26 | C002 | Required for target role: Cast House Junior Operator | High |
| 315 | 26 | C003 | Required for target role: Cast House Junior Operator | High |
| 316 | 26 | C004 | Required for target role: Cast House Junior Operator | High |
| 317 | 26 | C005 | Required for target role: Cast House Junior Operator | High |
| 318 | 26 | C032 | Required for target role: Cast House Junior Operator | High |
| 319 | 26 | C033 | Required for target role: Cast House Junior Operator | High |
| 320 | 26 | C034 | Required for target role: Cast House Junior Operator | High |
| 321 | 27 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 322 | 27 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 323 | 27 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 324 | 27 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 325 | 27 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 326 | 27 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 327 | 27 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 328 | 27 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 329 | 28 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 330 | 28 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 331 | 28 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 332 | 28 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 333 | 28 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 334 | 28 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 335 | 28 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 336 | 28 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 337 | 29 | C001 | Required for target role: Control Room Operator | High |
| 338 | 29 | C002 | Required for target role: Control Room Operator | High |
| 339 | 29 | C003 | Required for target role: Control Room Operator | High |
| 340 | 29 | C004 | Required for target role: Control Room Operator | High |
| 341 | 29 | C008 | Required for target role: Control Room Operator | High |
| 342 | 29 | C032 | Required for target role: Control Room Operator | High |
| 343 | 29 | C033 | Required for target role: Control Room Operator | High |
| 344 | 29 | C034 | Required for target role: Control Room Operator | High |
| 345 | 30 | C001 | Required for target role: Cast House Senior Operator | High |
| 346 | 30 | C002 | Required for target role: Cast House Senior Operator | High |
| 347 | 30 | C003 | Required for target role: Cast House Senior Operator | High |
| 348 | 30 | C004 | Required for target role: Cast House Senior Operator | High |
| 349 | 30 | C006 | Required for target role: Cast House Senior Operator | High |
| 350 | 30 | C032 | Required for target role: Cast House Senior Operator | High |
| 351 | 30 | C033 | Required for target role: Cast House Senior Operator | High |
| 352 | 30 | C034 | Required for target role: Cast House Senior Operator | High |
| 353 | 31 | C001 | Required for target role: Heating Regulator | High |
| 354 | 31 | C002 | Required for target role: Heating Regulator | High |
| 355 | 31 | C003 | Required for target role: Heating Regulator | High |
| 356 | 31 | C004 | Required for target role: Heating Regulator | High |
| 357 | 31 | C007 | Required for target role: Heating Regulator | High |
| 358 | 31 | C032 | Required for target role: Heating Regulator | High |
| 359 | 31 | C033 | Required for target role: Heating Regulator | High |
| 360 | 31 | C034 | Required for target role: Heating Regulator | High |
| 361 | 32 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 362 | 32 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 363 | 32 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 364 | 32 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 365 | 32 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 366 | 32 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 367 | 32 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 368 | 32 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 369 | 33 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 370 | 33 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 371 | 33 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 372 | 33 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 373 | 33 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 374 | 33 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 375 | 33 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 376 | 33 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 377 | 34 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 378 | 34 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 379 | 34 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 380 | 34 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 381 | 34 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 382 | 34 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 383 | 34 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 384 | 34 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 385 | 35 | C001 | Required for target role: Control Room Operator | High |
| 386 | 35 | C002 | Required for target role: Control Room Operator | High |
| 387 | 35 | C003 | Required for target role: Control Room Operator | High |
| 388 | 35 | C004 | Required for target role: Control Room Operator | High |
| 389 | 35 | C008 | Required for target role: Control Room Operator | High |
| 390 | 35 | C032 | Required for target role: Control Room Operator | High |
| 391 | 35 | C033 | Required for target role: Control Room Operator | High |
| 392 | 35 | C034 | Required for target role: Control Room Operator | High |
| 393 | 36 | C001 | Required for target role: Control Room Operator | High |
| 394 | 36 | C002 | Required for target role: Control Room Operator | High |
| 395 | 36 | C003 | Required for target role: Control Room Operator | High |
| 396 | 36 | C004 | Required for target role: Control Room Operator | High |
| 397 | 36 | C008 | Required for target role: Control Room Operator | High |
| 398 | 36 | C032 | Required for target role: Control Room Operator | High |
| 399 | 36 | C033 | Required for target role: Control Room Operator | High |
| 400 | 36 | C034 | Required for target role: Control Room Operator | High |
| 401 | 37 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 402 | 37 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 403 | 37 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 404 | 37 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 405 | 37 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 406 | 37 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 407 | 37 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 408 | 37 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 409 | 38 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 410 | 38 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 411 | 38 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 412 | 38 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 413 | 38 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 414 | 38 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 415 | 38 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 416 | 38 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 417 | 39 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 418 | 39 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 419 | 39 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 420 | 39 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 421 | 39 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 422 | 39 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 423 | 39 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 424 | 39 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 425 | 40 | C001 | Required for target role: Cast House Junior Operator | High |
| 426 | 40 | C002 | Required for target role: Cast House Junior Operator | High |
| 427 | 40 | C003 | Required for target role: Cast House Junior Operator | High |
| 428 | 40 | C004 | Required for target role: Cast House Junior Operator | High |
| 429 | 40 | C005 | Required for target role: Cast House Junior Operator | High |
| 430 | 40 | C032 | Required for target role: Cast House Junior Operator | High |
| 431 | 40 | C033 | Required for target role: Cast House Junior Operator | High |
| 432 | 40 | C034 | Required for target role: Cast House Junior Operator | High |
| 433 | 41 | C001 | Required for target role: Cast House Junior Operator | High |
| 434 | 41 | C002 | Required for target role: Cast House Junior Operator | High |
| 435 | 41 | C003 | Required for target role: Cast House Junior Operator | High |
| 436 | 41 | C004 | Required for target role: Cast House Junior Operator | High |
| 437 | 41 | C005 | Required for target role: Cast House Junior Operator | High |
| 438 | 41 | C032 | Required for target role: Cast House Junior Operator | High |
| 439 | 41 | C033 | Required for target role: Cast House Junior Operator | High |
| 440 | 41 | C034 | Required for target role: Cast House Junior Operator | High |
| 441 | 42 | C001 | Required for target role: Heating Regulator | High |
| 442 | 42 | C002 | Required for target role: Heating Regulator | High |
| 443 | 42 | C003 | Required for target role: Heating Regulator | High |
| 444 | 42 | C004 | Required for target role: Heating Regulator | High |
| 445 | 42 | C007 | Required for target role: Heating Regulator | High |
| 446 | 42 | C032 | Required for target role: Heating Regulator | High |
| 447 | 42 | C033 | Required for target role: Heating Regulator | High |
| 448 | 42 | C034 | Required for target role: Heating Regulator | High |
| 449 | 43 | C001 | Required for target role: Control Room Operator | High |
| 450 | 43 | C002 | Required for target role: Control Room Operator | High |
| 451 | 43 | C003 | Required for target role: Control Room Operator | High |
| 452 | 43 | C004 | Required for target role: Control Room Operator | High |
| 453 | 43 | C008 | Required for target role: Control Room Operator | High |
| 454 | 43 | C032 | Required for target role: Control Room Operator | High |
| 455 | 43 | C033 | Required for target role: Control Room Operator | High |
| 456 | 43 | C034 | Required for target role: Control Room Operator | High |
| 457 | 44 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 458 | 44 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 459 | 44 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 460 | 44 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 461 | 44 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 462 | 44 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 463 | 44 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 464 | 44 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 465 | 45 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 466 | 45 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 467 | 45 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 468 | 45 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 469 | 45 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 470 | 45 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 471 | 45 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 472 | 45 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 473 | 46 | C001 | Required for target role: Heating Regulator | High |
| 474 | 46 | C002 | Required for target role: Heating Regulator | High |
| 475 | 46 | C003 | Required for target role: Heating Regulator | High |
| 476 | 46 | C004 | Required for target role: Heating Regulator | High |
| 477 | 46 | C007 | Required for target role: Heating Regulator | High |
| 478 | 46 | C032 | Required for target role: Heating Regulator | High |
| 479 | 46 | C033 | Required for target role: Heating Regulator | High |
| 480 | 46 | C034 | Required for target role: Heating Regulator | High |
| 481 | 47 | C001 | Required for target role: Cast House Senior Operator | High |
| 482 | 47 | C002 | Required for target role: Cast House Senior Operator | High |
| 483 | 47 | C003 | Required for target role: Cast House Senior Operator | High |
| 484 | 47 | C004 | Required for target role: Cast House Senior Operator | High |
| 485 | 47 | C006 | Required for target role: Cast House Senior Operator | High |
| 486 | 47 | C032 | Required for target role: Cast House Senior Operator | High |
| 487 | 47 | C033 | Required for target role: Cast House Senior Operator | High |
| 488 | 47 | C034 | Required for target role: Cast House Senior Operator | High |
| 489 | 48 | C001 | Required for target role: Cast House Senior Operator | High |
| 490 | 48 | C002 | Required for target role: Cast House Senior Operator | High |
| 491 | 48 | C003 | Required for target role: Cast House Senior Operator | High |
| 492 | 48 | C004 | Required for target role: Cast House Senior Operator | High |
| 493 | 48 | C006 | Required for target role: Cast House Senior Operator | High |
| 494 | 48 | C032 | Required for target role: Cast House Senior Operator | High |
| 495 | 48 | C033 | Required for target role: Cast House Senior Operator | High |
| 496 | 48 | C034 | Required for target role: Cast House Senior Operator | High |
| 497 | 49 | C001 | Required for target role: Heating Regulator | High |
| 498 | 49 | C002 | Required for target role: Heating Regulator | High |
| 499 | 49 | C003 | Required for target role: Heating Regulator | High |
| 500 | 49 | C004 | Required for target role: Heating Regulator | High |
| 501 | 49 | C007 | Required for target role: Heating Regulator | High |
| 502 | 49 | C032 | Required for target role: Heating Regulator | High |
| 503 | 49 | C033 | Required for target role: Heating Regulator | High |
| 504 | 49 | C034 | Required for target role: Heating Regulator | High |
| 505 | 50 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 506 | 50 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 507 | 50 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 508 | 50 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 509 | 50 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 510 | 50 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 511 | 50 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 512 | 50 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 513 | 51 | C001 | Required for target role: Process Operator: Rolling Mills | High |
| 514 | 51 | C002 | Required for target role: Process Operator: Rolling Mills | High |
| 515 | 51 | C003 | Required for target role: Process Operator: Rolling Mills | High |
| 516 | 51 | C004 | Required for target role: Process Operator: Rolling Mills | High |
| 517 | 51 | C009 | Required for target role: Process Operator: Rolling Mills | High |
| 518 | 51 | C032 | Required for target role: Process Operator: Rolling Mills | High |
| 519 | 51 | C033 | Required for target role: Process Operator: Rolling Mills | High |
| 520 | 51 | C034 | Required for target role: Process Operator: Rolling Mills | High |
| 521 | 52 | C001 | Required for target role: Cast House Junior Operator | High |
| 522 | 52 | C002 | Required for target role: Cast House Junior Operator | High |
| 523 | 52 | C003 | Required for target role: Cast House Junior Operator | High |
| 524 | 52 | C004 | Required for target role: Cast House Junior Operator | High |
| 525 | 52 | C005 | Required for target role: Cast House Junior Operator | High |
| 526 | 52 | C032 | Required for target role: Cast House Junior Operator | High |
| 527 | 52 | C033 | Required for target role: Cast House Junior Operator | High |
| 528 | 52 | C034 | Required for target role: Cast House Junior Operator | High |
| 529 | 53 | C001 | Required for target role: Control Room Operator | High |
| 530 | 53 | C002 | Required for target role: Control Room Operator | High |
| 531 | 53 | C003 | Required for target role: Control Room Operator | High |
| 532 | 53 | C004 | Required for target role: Control Room Operator | High |
| 533 | 53 | C008 | Required for target role: Control Room Operator | High |
| 534 | 53 | C032 | Required for target role: Control Room Operator | High |
| 535 | 53 | C033 | Required for target role: Control Room Operator | High |
| 536 | 53 | C034 | Required for target role: Control Room Operator | High |
| 537 | 54 | C001 | Required for target role: Cast House Senior Operator | High |
| 538 | 54 | C002 | Required for target role: Cast House Senior Operator | High |
| 539 | 54 | C003 | Required for target role: Cast House Senior Operator | High |
| 540 | 54 | C004 | Required for target role: Cast House Senior Operator | High |
| 541 | 54 | C006 | Required for target role: Cast House Senior Operator | High |
| 542 | 54 | C032 | Required for target role: Cast House Senior Operator | High |
| 543 | 54 | C033 | Required for target role: Cast House Senior Operator | High |
| 544 | 54 | C034 | Required for target role: Cast House Senior Operator | High |
| 545 | 55 | C001 | Required for target role: Control Room Operator | High |
| 546 | 55 | C002 | Required for target role: Control Room Operator | High |
| 547 | 55 | C003 | Required for target role: Control Room Operator | High |
| 548 | 55 | C004 | Required for target role: Control Room Operator | High |
| 549 | 55 | C008 | Required for target role: Control Room Operator | High |
| 550 | 55 | C032 | Required for target role: Control Room Operator | High |
| 551 | 55 | C033 | Required for target role: Control Room Operator | High |
| 552 | 55 | C034 | Required for target role: Control Room Operator | High |
| 553 | 57 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 554 | 57 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 555 | 57 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 556 | 57 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 557 | 57 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 558 | 57 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 559 | 57 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 560 | 57 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 561 | 58 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 562 | 58 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 563 | 58 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 564 | 58 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 565 | 58 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 566 | 58 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 567 | 58 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 568 | 58 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 569 | 59 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 570 | 59 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 571 | 59 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 572 | 59 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 573 | 59 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 574 | 59 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 575 | 59 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 576 | 59 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 577 | 60 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 578 | 60 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 579 | 60 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 580 | 60 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 581 | 60 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 582 | 60 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 583 | 60 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 584 | 60 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 585 | 61 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 586 | 61 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 587 | 61 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 588 | 61 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 589 | 61 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 590 | 61 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 591 | 61 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 592 | 61 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 593 | 62 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 594 | 62 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 595 | 62 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 596 | 62 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 597 | 62 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 598 | 62 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 599 | 62 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 600 | 62 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 601 | 63 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 602 | 63 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 603 | 63 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 604 | 63 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 605 | 63 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 606 | 63 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 607 | 63 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 608 | 63 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 609 | 64 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 610 | 64 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 611 | 64 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 612 | 64 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 613 | 64 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 614 | 64 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 615 | 64 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 616 | 64 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 617 | 65 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 618 | 65 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 619 | 65 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 620 | 65 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 621 | 65 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 622 | 65 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 623 | 65 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 624 | 65 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 625 | 66 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 626 | 66 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 627 | 66 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 628 | 66 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 629 | 66 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 630 | 66 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 631 | 66 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 632 | 66 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 633 | 67 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 634 | 67 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 635 | 67 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 636 | 67 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 637 | 67 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 638 | 67 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 639 | 67 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 640 | 67 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 641 | 68 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 642 | 68 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 643 | 68 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 644 | 68 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 645 | 68 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 646 | 68 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 647 | 68 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 648 | 68 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 649 | 69 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 650 | 69 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 651 | 69 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 652 | 69 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 653 | 69 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 654 | 69 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 655 | 69 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 656 | 69 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 657 | 70 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 658 | 70 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 659 | 70 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 660 | 70 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 661 | 70 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 662 | 70 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 663 | 70 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 664 | 70 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 665 | 71 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 666 | 71 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 667 | 71 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 668 | 71 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 669 | 71 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 670 | 71 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 671 | 71 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 672 | 71 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 673 | 72 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 674 | 72 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 675 | 72 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 676 | 72 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 677 | 72 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 678 | 72 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 679 | 72 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 680 | 72 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 681 | 73 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 682 | 73 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 683 | 73 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 684 | 73 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 685 | 73 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 686 | 73 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 687 | 73 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 688 | 73 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 689 | 74 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 690 | 74 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 691 | 74 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 692 | 74 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 693 | 74 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 694 | 74 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 695 | 74 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 696 | 74 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 697 | 75 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 698 | 75 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 699 | 75 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 700 | 75 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 701 | 75 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 702 | 75 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 703 | 75 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 704 | 75 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 705 | 76 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 706 | 76 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 707 | 76 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 708 | 76 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 709 | 76 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 710 | 76 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 711 | 76 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 712 | 76 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 713 | 77 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 714 | 77 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 715 | 77 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 716 | 77 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 717 | 77 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 718 | 77 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 719 | 77 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 720 | 77 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 721 | 78 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 722 | 78 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 723 | 78 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 724 | 78 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 725 | 78 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 726 | 78 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 727 | 78 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 728 | 78 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 729 | 79 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 730 | 79 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 731 | 79 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 732 | 79 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 733 | 79 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 734 | 79 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 735 | 79 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 736 | 79 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 737 | 80 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 738 | 80 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 739 | 80 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 740 | 80 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 741 | 80 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 742 | 80 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 743 | 80 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 744 | 80 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 745 | 81 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 746 | 81 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 747 | 81 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 748 | 81 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 749 | 81 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 750 | 81 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 751 | 81 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 752 | 81 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 753 | 82 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 754 | 82 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 755 | 82 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 756 | 82 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 757 | 82 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 758 | 82 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 759 | 82 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 760 | 82 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 761 | 83 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 762 | 83 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 763 | 83 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 764 | 83 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 765 | 83 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 766 | 83 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 767 | 83 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 768 | 83 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 769 | 84 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 770 | 84 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 771 | 84 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 772 | 84 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 773 | 84 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 774 | 84 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 775 | 84 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 776 | 84 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 777 | 85 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 778 | 85 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 779 | 85 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 780 | 85 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 781 | 85 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 782 | 85 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 783 | 85 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 784 | 85 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 785 | 86 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 786 | 86 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 787 | 86 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 788 | 86 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 789 | 86 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 790 | 86 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 791 | 86 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 792 | 86 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 793 | 87 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 794 | 87 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 795 | 87 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 796 | 87 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 797 | 87 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 798 | 87 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 799 | 87 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 800 | 87 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 801 | 88 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 802 | 88 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 803 | 88 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 804 | 88 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 805 | 88 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 806 | 88 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 807 | 88 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 808 | 88 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 809 | 89 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 810 | 89 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 811 | 89 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 812 | 89 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 813 | 89 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 814 | 89 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 815 | 89 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 816 | 89 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 817 | 90 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 818 | 90 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 819 | 90 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 820 | 90 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 821 | 90 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 822 | 90 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 823 | 90 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 824 | 90 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 825 | 91 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 826 | 91 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 827 | 91 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 828 | 91 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 829 | 91 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 830 | 91 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 831 | 91 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 832 | 91 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 833 | 92 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 834 | 92 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 835 | 92 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 836 | 92 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 837 | 92 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 838 | 92 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 839 | 92 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 840 | 92 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 841 | 93 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 842 | 93 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 843 | 93 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 844 | 93 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 845 | 93 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 846 | 93 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 847 | 93 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 848 | 93 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 849 | 94 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 850 | 94 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 851 | 94 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 852 | 94 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 853 | 94 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 854 | 94 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 855 | 94 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 856 | 94 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 857 | 95 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 858 | 95 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 859 | 95 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 860 | 95 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 861 | 95 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 862 | 95 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 863 | 95 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 864 | 95 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 865 | 96 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 866 | 96 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 867 | 96 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 868 | 96 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 869 | 96 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 870 | 96 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 871 | 96 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 872 | 96 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 873 | 97 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 874 | 97 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 875 | 97 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 876 | 97 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 877 | 97 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 878 | 97 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 879 | 97 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 880 | 97 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 881 | 98 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 882 | 98 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 883 | 98 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 884 | 98 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 885 | 98 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 886 | 98 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 887 | 98 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 888 | 98 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 889 | 99 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 890 | 99 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 891 | 99 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 892 | 99 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 893 | 99 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 894 | 99 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 895 | 99 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 896 | 99 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 897 | 100 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 898 | 100 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 899 | 100 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 900 | 100 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 901 | 100 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 902 | 100 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 903 | 100 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 904 | 100 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 905 | 101 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 906 | 101 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 907 | 101 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 908 | 101 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 909 | 101 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 910 | 101 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 911 | 101 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 912 | 101 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 913 | 102 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 914 | 102 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 915 | 102 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 916 | 102 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 917 | 102 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 918 | 102 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 919 | 102 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 920 | 102 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 921 | 103 | C001 | Required for target role: Belt Conveyor Maintenance | High |
| 922 | 103 | C002 | Required for target role: Belt Conveyor Maintenance | High |
| 923 | 103 | C003 | Required for target role: Belt Conveyor Maintenance | High |
| 924 | 103 | C004 | Required for target role: Belt Conveyor Maintenance | High |
| 925 | 103 | C012 | Required for target role: Belt Conveyor Maintenance | High |
| 926 | 103 | C032 | Required for target role: Belt Conveyor Maintenance | High |
| 927 | 103 | C033 | Required for target role: Belt Conveyor Maintenance | High |
| 928 | 103 | C034 | Required for target role: Belt Conveyor Maintenance | High |
| 929 | 104 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 930 | 104 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 931 | 104 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 932 | 104 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 933 | 104 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 934 | 104 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 935 | 104 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 936 | 104 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 937 | 105 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 938 | 105 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 939 | 105 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 940 | 105 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 941 | 105 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 942 | 105 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 943 | 105 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 944 | 105 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 945 | 106 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 946 | 106 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 947 | 106 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 948 | 106 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 949 | 106 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 950 | 106 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 951 | 106 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 952 | 106 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 953 | 107 | C001 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 954 | 107 | C002 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 955 | 107 | C003 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 956 | 107 | C004 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 957 | 107 | C014 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 958 | 107 | C032 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 959 | 107 | C033 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 960 | 107 | C034 | Required for target role: Iron & Steel - Fitter Instrumentation | High |
| 961 | 108 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 962 | 108 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 963 | 108 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 964 | 108 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 965 | 108 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 966 | 108 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 967 | 108 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 968 | 108 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 969 | 109 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 970 | 109 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 971 | 109 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 972 | 109 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 973 | 109 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 974 | 109 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 975 | 109 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 976 | 109 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 977 | 110 | C001 | Required for target role: Mobile Equipment Maintenance | High |
| 978 | 110 | C002 | Required for target role: Mobile Equipment Maintenance | High |
| 979 | 110 | C003 | Required for target role: Mobile Equipment Maintenance | High |
| 980 | 110 | C004 | Required for target role: Mobile Equipment Maintenance | High |
| 981 | 110 | C018 | Required for target role: Mobile Equipment Maintenance | High |
| 982 | 110 | C032 | Required for target role: Mobile Equipment Maintenance | High |
| 983 | 110 | C033 | Required for target role: Mobile Equipment Maintenance | High |
| 984 | 110 | C034 | Required for target role: Mobile Equipment Maintenance | High |
| 985 | 111 | C001 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 986 | 111 | C002 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 987 | 111 | C003 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 988 | 111 | C004 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 989 | 111 | C016 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 990 | 111 | C032 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 991 | 111 | C033 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 992 | 111 | C034 | Required for target role: Fitter: Hydraulic & Pneumatic System | High |
| 993 | 113 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 994 | 113 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 995 | 113 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 996 | 113 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 997 | 113 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 998 | 113 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 999 | 113 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1000 | 113 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1001 | 114 | C001 | Required for target role: Locomotive Driver | High |
| 1002 | 114 | C002 | Required for target role: Locomotive Driver | High |
| 1003 | 114 | C003 | Required for target role: Locomotive Driver | High |
| 1004 | 114 | C004 | Required for target role: Locomotive Driver | High |
| 1005 | 114 | C022 | Required for target role: Locomotive Driver | High |
| 1006 | 114 | C032 | Required for target role: Locomotive Driver | High |
| 1007 | 114 | C033 | Required for target role: Locomotive Driver | High |
| 1008 | 114 | C034 | Required for target role: Locomotive Driver | High |
| 1009 | 115 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1010 | 115 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1011 | 115 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1012 | 115 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1013 | 115 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1014 | 115 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1015 | 115 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1016 | 115 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1017 | 116 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1018 | 116 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1019 | 116 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1020 | 116 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1021 | 116 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1022 | 116 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1023 | 116 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1024 | 116 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1025 | 117 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1026 | 117 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1027 | 117 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1028 | 117 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1029 | 117 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1030 | 117 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1031 | 117 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1032 | 117 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1033 | 118 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1034 | 118 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1035 | 118 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1036 | 118 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1037 | 118 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1038 | 118 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1039 | 118 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1040 | 118 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1041 | 119 | C001 | Required for target role: Locomotive Driver | High |
| 1042 | 119 | C002 | Required for target role: Locomotive Driver | High |
| 1043 | 119 | C003 | Required for target role: Locomotive Driver | High |
| 1044 | 119 | C004 | Required for target role: Locomotive Driver | High |
| 1045 | 119 | C022 | Required for target role: Locomotive Driver | High |
| 1046 | 119 | C032 | Required for target role: Locomotive Driver | High |
| 1047 | 119 | C033 | Required for target role: Locomotive Driver | High |
| 1048 | 119 | C034 | Required for target role: Locomotive Driver | High |
| 1049 | 120 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1050 | 120 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1051 | 120 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1052 | 120 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1053 | 120 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1054 | 120 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1055 | 120 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1056 | 120 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1057 | 121 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1058 | 121 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1059 | 121 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1060 | 121 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1061 | 121 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1062 | 121 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1063 | 121 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1064 | 121 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1065 | 122 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1066 | 122 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1067 | 122 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1068 | 122 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1069 | 122 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1070 | 122 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1071 | 122 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1072 | 122 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1073 | 123 | C001 | Required for target role: Locomotive Driver | High |
| 1074 | 123 | C002 | Required for target role: Locomotive Driver | High |
| 1075 | 123 | C003 | Required for target role: Locomotive Driver | High |
| 1076 | 123 | C004 | Required for target role: Locomotive Driver | High |
| 1077 | 123 | C022 | Required for target role: Locomotive Driver | High |
| 1078 | 123 | C032 | Required for target role: Locomotive Driver | High |
| 1079 | 123 | C033 | Required for target role: Locomotive Driver | High |
| 1080 | 123 | C034 | Required for target role: Locomotive Driver | High |
| 1081 | 124 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1082 | 124 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1083 | 124 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1084 | 124 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1085 | 124 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1086 | 124 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1087 | 124 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1088 | 124 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1089 | 125 | C001 | Required for target role: Locomotive Driver | High |
| 1090 | 125 | C002 | Required for target role: Locomotive Driver | High |
| 1091 | 125 | C003 | Required for target role: Locomotive Driver | High |
| 1092 | 125 | C004 | Required for target role: Locomotive Driver | High |
| 1093 | 125 | C022 | Required for target role: Locomotive Driver | High |
| 1094 | 125 | C032 | Required for target role: Locomotive Driver | High |
| 1095 | 125 | C033 | Required for target role: Locomotive Driver | High |
| 1096 | 125 | C034 | Required for target role: Locomotive Driver | High |
| 1097 | 126 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1098 | 126 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1099 | 126 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1100 | 126 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1101 | 126 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1102 | 126 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1103 | 126 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1104 | 126 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1105 | 127 | C001 | Required for target role: Locomotive Driver | High |
| 1106 | 127 | C002 | Required for target role: Locomotive Driver | High |
| 1107 | 127 | C003 | Required for target role: Locomotive Driver | High |
| 1108 | 127 | C004 | Required for target role: Locomotive Driver | High |
| 1109 | 127 | C022 | Required for target role: Locomotive Driver | High |
| 1110 | 127 | C032 | Required for target role: Locomotive Driver | High |
| 1111 | 127 | C033 | Required for target role: Locomotive Driver | High |
| 1112 | 127 | C034 | Required for target role: Locomotive Driver | High |
| 1113 | 128 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1114 | 128 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1115 | 128 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1116 | 128 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1117 | 128 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1118 | 128 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1119 | 128 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1120 | 128 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1121 | 129 | C001 | Required for target role: Locomotive Driver | High |
| 1122 | 129 | C002 | Required for target role: Locomotive Driver | High |
| 1123 | 129 | C003 | Required for target role: Locomotive Driver | High |
| 1124 | 129 | C004 | Required for target role: Locomotive Driver | High |
| 1125 | 129 | C022 | Required for target role: Locomotive Driver | High |
| 1126 | 129 | C032 | Required for target role: Locomotive Driver | High |
| 1127 | 129 | C033 | Required for target role: Locomotive Driver | High |
| 1128 | 129 | C034 | Required for target role: Locomotive Driver | High |
| 1129 | 130 | C001 | Required for target role: Locomotive Driver | High |
| 1130 | 130 | C002 | Required for target role: Locomotive Driver | High |
| 1131 | 130 | C003 | Required for target role: Locomotive Driver | High |
| 1132 | 130 | C004 | Required for target role: Locomotive Driver | High |
| 1133 | 130 | C022 | Required for target role: Locomotive Driver | High |
| 1134 | 130 | C032 | Required for target role: Locomotive Driver | High |
| 1135 | 130 | C033 | Required for target role: Locomotive Driver | High |
| 1136 | 130 | C034 | Required for target role: Locomotive Driver | High |
| 1137 | 131 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1138 | 131 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1139 | 131 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1140 | 131 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1141 | 131 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1142 | 131 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1143 | 131 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1144 | 131 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1145 | 132 | C001 | Required for target role: Locomotive Driver | High |
| 1146 | 132 | C002 | Required for target role: Locomotive Driver | High |
| 1147 | 132 | C003 | Required for target role: Locomotive Driver | High |
| 1148 | 132 | C004 | Required for target role: Locomotive Driver | High |
| 1149 | 132 | C022 | Required for target role: Locomotive Driver | High |
| 1150 | 132 | C032 | Required for target role: Locomotive Driver | High |
| 1151 | 132 | C033 | Required for target role: Locomotive Driver | High |
| 1152 | 132 | C034 | Required for target role: Locomotive Driver | High |
| 1153 | 133 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1154 | 133 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1155 | 133 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1156 | 133 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1157 | 133 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1158 | 133 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1159 | 133 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1160 | 133 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1161 | 134 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1162 | 134 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1163 | 134 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1164 | 134 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1165 | 134 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1166 | 134 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1167 | 134 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1168 | 134 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1169 | 135 | C001 | Required for target role: Locomotive Driver | High |
| 1170 | 135 | C002 | Required for target role: Locomotive Driver | High |
| 1171 | 135 | C003 | Required for target role: Locomotive Driver | High |
| 1172 | 135 | C004 | Required for target role: Locomotive Driver | High |
| 1173 | 135 | C022 | Required for target role: Locomotive Driver | High |
| 1174 | 135 | C032 | Required for target role: Locomotive Driver | High |
| 1175 | 135 | C033 | Required for target role: Locomotive Driver | High |
| 1176 | 135 | C034 | Required for target role: Locomotive Driver | High |
| 1177 | 136 | C001 | Required for target role: Locomotive Driver | High |
| 1178 | 136 | C002 | Required for target role: Locomotive Driver | High |
| 1179 | 136 | C003 | Required for target role: Locomotive Driver | High |
| 1180 | 136 | C004 | Required for target role: Locomotive Driver | High |
| 1181 | 136 | C022 | Required for target role: Locomotive Driver | High |
| 1182 | 136 | C032 | Required for target role: Locomotive Driver | High |
| 1183 | 136 | C033 | Required for target role: Locomotive Driver | High |
| 1184 | 136 | C034 | Required for target role: Locomotive Driver | High |
| 1185 | 137 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1186 | 137 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1187 | 137 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1188 | 137 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1189 | 137 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1190 | 137 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1191 | 137 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1192 | 137 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1193 | 138 | C001 | Required for target role: Locomotive Driver | High |
| 1194 | 138 | C002 | Required for target role: Locomotive Driver | High |
| 1195 | 138 | C003 | Required for target role: Locomotive Driver | High |
| 1196 | 138 | C004 | Required for target role: Locomotive Driver | High |
| 1197 | 138 | C022 | Required for target role: Locomotive Driver | High |
| 1198 | 138 | C032 | Required for target role: Locomotive Driver | High |
| 1199 | 138 | C033 | Required for target role: Locomotive Driver | High |
| 1200 | 138 | C034 | Required for target role: Locomotive Driver | High |
| 1201 | 139 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1202 | 139 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1203 | 139 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1204 | 139 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1205 | 139 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1206 | 139 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1207 | 139 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1208 | 139 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1209 | 140 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1210 | 140 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1211 | 140 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1212 | 140 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1213 | 140 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1214 | 140 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1215 | 140 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1216 | 140 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1217 | 141 | C001 | Required for target role: Locomotive Driver | High |
| 1218 | 141 | C002 | Required for target role: Locomotive Driver | High |
| 1219 | 141 | C003 | Required for target role: Locomotive Driver | High |
| 1220 | 141 | C004 | Required for target role: Locomotive Driver | High |
| 1221 | 141 | C022 | Required for target role: Locomotive Driver | High |
| 1222 | 141 | C032 | Required for target role: Locomotive Driver | High |
| 1223 | 141 | C033 | Required for target role: Locomotive Driver | High |
| 1224 | 141 | C034 | Required for target role: Locomotive Driver | High |
| 1225 | 142 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1226 | 142 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1227 | 142 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1228 | 142 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1229 | 142 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1230 | 142 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1231 | 142 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1232 | 142 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1233 | 143 | C001 | Required for target role: Locomotive Driver | High |
| 1234 | 143 | C002 | Required for target role: Locomotive Driver | High |
| 1235 | 143 | C003 | Required for target role: Locomotive Driver | High |
| 1236 | 143 | C004 | Required for target role: Locomotive Driver | High |
| 1237 | 143 | C022 | Required for target role: Locomotive Driver | High |
| 1238 | 143 | C032 | Required for target role: Locomotive Driver | High |
| 1239 | 143 | C033 | Required for target role: Locomotive Driver | High |
| 1240 | 143 | C034 | Required for target role: Locomotive Driver | High |
| 1241 | 144 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1242 | 144 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1243 | 144 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1244 | 144 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1245 | 144 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1246 | 144 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1247 | 144 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1248 | 144 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1249 | 145 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1250 | 145 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1251 | 145 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1252 | 145 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1253 | 145 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1254 | 145 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1255 | 145 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1256 | 145 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1257 | 146 | C001 | Required for target role: Locomotive Driver | High |
| 1258 | 146 | C002 | Required for target role: Locomotive Driver | High |
| 1259 | 146 | C003 | Required for target role: Locomotive Driver | High |
| 1260 | 146 | C004 | Required for target role: Locomotive Driver | High |
| 1261 | 146 | C022 | Required for target role: Locomotive Driver | High |
| 1262 | 146 | C032 | Required for target role: Locomotive Driver | High |
| 1263 | 146 | C033 | Required for target role: Locomotive Driver | High |
| 1264 | 146 | C034 | Required for target role: Locomotive Driver | High |
| 1265 | 147 | C001 | Required for target role: Locomotive Driver | High |
| 1266 | 147 | C002 | Required for target role: Locomotive Driver | High |
| 1267 | 147 | C003 | Required for target role: Locomotive Driver | High |
| 1268 | 147 | C004 | Required for target role: Locomotive Driver | High |
| 1269 | 147 | C022 | Required for target role: Locomotive Driver | High |
| 1270 | 147 | C032 | Required for target role: Locomotive Driver | High |
| 1271 | 147 | C033 | Required for target role: Locomotive Driver | High |
| 1272 | 147 | C034 | Required for target role: Locomotive Driver | High |
| 1273 | 148 | C001 | Required for target role: Locomotive Driver | High |
| 1274 | 148 | C002 | Required for target role: Locomotive Driver | High |
| 1275 | 148 | C003 | Required for target role: Locomotive Driver | High |
| 1276 | 148 | C004 | Required for target role: Locomotive Driver | High |
| 1277 | 148 | C022 | Required for target role: Locomotive Driver | High |
| 1278 | 148 | C032 | Required for target role: Locomotive Driver | High |
| 1279 | 148 | C033 | Required for target role: Locomotive Driver | High |
| 1280 | 148 | C034 | Required for target role: Locomotive Driver | High |
| 1281 | 149 | C001 | Required for target role: Locomotive Driver | High |
| 1282 | 149 | C002 | Required for target role: Locomotive Driver | High |
| 1283 | 149 | C003 | Required for target role: Locomotive Driver | High |
| 1284 | 149 | C004 | Required for target role: Locomotive Driver | High |
| 1285 | 149 | C022 | Required for target role: Locomotive Driver | High |
| 1286 | 149 | C032 | Required for target role: Locomotive Driver | High |
| 1287 | 149 | C033 | Required for target role: Locomotive Driver | High |
| 1288 | 149 | C034 | Required for target role: Locomotive Driver | High |
| 1289 | 150 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1290 | 150 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1291 | 150 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1292 | 150 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1293 | 150 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1294 | 150 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1295 | 150 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1296 | 150 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1297 | 151 | C001 | Required for target role: Locomotive Driver | High |
| 1298 | 151 | C002 | Required for target role: Locomotive Driver | High |
| 1299 | 151 | C003 | Required for target role: Locomotive Driver | High |
| 1300 | 151 | C004 | Required for target role: Locomotive Driver | High |
| 1301 | 151 | C022 | Required for target role: Locomotive Driver | High |
| 1302 | 151 | C032 | Required for target role: Locomotive Driver | High |
| 1303 | 151 | C033 | Required for target role: Locomotive Driver | High |
| 1304 | 151 | C034 | Required for target role: Locomotive Driver | High |
| 1305 | 152 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1306 | 152 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1307 | 152 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1308 | 152 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1309 | 152 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1310 | 152 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1311 | 152 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1312 | 152 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1313 | 153 | C001 | Required for target role: Locomotive Driver | High |
| 1314 | 153 | C002 | Required for target role: Locomotive Driver | High |
| 1315 | 153 | C003 | Required for target role: Locomotive Driver | High |
| 1316 | 153 | C004 | Required for target role: Locomotive Driver | High |
| 1317 | 153 | C022 | Required for target role: Locomotive Driver | High |
| 1318 | 153 | C032 | Required for target role: Locomotive Driver | High |
| 1319 | 153 | C033 | Required for target role: Locomotive Driver | High |
| 1320 | 153 | C034 | Required for target role: Locomotive Driver | High |
| 1321 | 154 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1322 | 154 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1323 | 154 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1324 | 154 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1325 | 154 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1326 | 154 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1327 | 154 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1328 | 154 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1329 | 155 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1330 | 155 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1331 | 155 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1332 | 155 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1333 | 155 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1334 | 155 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1335 | 155 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1336 | 155 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1337 | 156 | C001 | Required for target role: Locomotive Driver | High |
| 1338 | 156 | C002 | Required for target role: Locomotive Driver | High |
| 1339 | 156 | C003 | Required for target role: Locomotive Driver | High |
| 1340 | 156 | C004 | Required for target role: Locomotive Driver | High |
| 1341 | 156 | C022 | Required for target role: Locomotive Driver | High |
| 1342 | 156 | C032 | Required for target role: Locomotive Driver | High |
| 1343 | 156 | C033 | Required for target role: Locomotive Driver | High |
| 1344 | 156 | C034 | Required for target role: Locomotive Driver | High |
| 1345 | 157 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1346 | 157 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1347 | 157 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1348 | 157 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1349 | 157 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1350 | 157 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1351 | 157 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1352 | 157 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1353 | 158 | C001 | Required for target role: Locomotive Driver | High |
| 1354 | 158 | C002 | Required for target role: Locomotive Driver | High |
| 1355 | 158 | C003 | Required for target role: Locomotive Driver | High |
| 1356 | 158 | C004 | Required for target role: Locomotive Driver | High |
| 1357 | 158 | C022 | Required for target role: Locomotive Driver | High |
| 1358 | 158 | C032 | Required for target role: Locomotive Driver | High |
| 1359 | 158 | C033 | Required for target role: Locomotive Driver | High |
| 1360 | 158 | C034 | Required for target role: Locomotive Driver | High |
| 1361 | 159 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1362 | 159 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1363 | 159 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1364 | 159 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1365 | 159 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1366 | 159 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1367 | 159 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1368 | 159 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1369 | 160 | C001 | Required for target role: Locomotive Driver | High |
| 1370 | 160 | C002 | Required for target role: Locomotive Driver | High |
| 1371 | 160 | C003 | Required for target role: Locomotive Driver | High |
| 1372 | 160 | C004 | Required for target role: Locomotive Driver | High |
| 1373 | 160 | C022 | Required for target role: Locomotive Driver | High |
| 1374 | 160 | C032 | Required for target role: Locomotive Driver | High |
| 1375 | 160 | C033 | Required for target role: Locomotive Driver | High |
| 1376 | 160 | C034 | Required for target role: Locomotive Driver | High |
| 1377 | 161 | C001 | Required for target role: Locomotive Driver | High |
| 1378 | 161 | C002 | Required for target role: Locomotive Driver | High |
| 1379 | 161 | C003 | Required for target role: Locomotive Driver | High |
| 1380 | 161 | C004 | Required for target role: Locomotive Driver | High |
| 1381 | 161 | C022 | Required for target role: Locomotive Driver | High |
| 1382 | 161 | C032 | Required for target role: Locomotive Driver | High |
| 1383 | 161 | C033 | Required for target role: Locomotive Driver | High |
| 1384 | 161 | C034 | Required for target role: Locomotive Driver | High |
| 1385 | 162 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1386 | 162 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1387 | 162 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1388 | 162 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1389 | 162 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1390 | 162 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1391 | 162 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1392 | 162 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1393 | 163 | C001 | Required for target role: Locomotive Driver | High |
| 1394 | 163 | C002 | Required for target role: Locomotive Driver | High |
| 1395 | 163 | C003 | Required for target role: Locomotive Driver | High |
| 1396 | 163 | C004 | Required for target role: Locomotive Driver | High |
| 1397 | 163 | C022 | Required for target role: Locomotive Driver | High |
| 1398 | 163 | C032 | Required for target role: Locomotive Driver | High |
| 1399 | 163 | C033 | Required for target role: Locomotive Driver | High |
| 1400 | 163 | C034 | Required for target role: Locomotive Driver | High |
| 1401 | 164 | C001 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1402 | 164 | C002 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1403 | 164 | C003 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1404 | 164 | C004 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1405 | 164 | C019 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1406 | 164 | C032 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1407 | 164 | C033 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1408 | 164 | C034 | Required for target role: Rigger: Rigging of Heavy Material | High |
| 1409 | 165 | C001 | Required for target role: Mobile Equipment Operator | High |
| 1410 | 165 | C002 | Required for target role: Mobile Equipment Operator | High |
| 1411 | 165 | C003 | Required for target role: Mobile Equipment Operator | High |
| 1412 | 165 | C004 | Required for target role: Mobile Equipment Operator | High |
| 1413 | 165 | C020 | Required for target role: Mobile Equipment Operator | High |
| 1414 | 165 | C032 | Required for target role: Mobile Equipment Operator | High |
| 1415 | 165 | C033 | Required for target role: Mobile Equipment Operator | High |
| 1416 | 165 | C034 | Required for target role: Mobile Equipment Operator | High |
| 1417 | 166 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1418 | 166 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1419 | 166 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1420 | 166 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1421 | 166 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1422 | 166 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1423 | 166 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1424 | 166 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1425 | 167 | C001 | Required for target role: EOT Overhead Crane Operator | High |
| 1426 | 167 | C002 | Required for target role: EOT Overhead Crane Operator | High |
| 1427 | 167 | C003 | Required for target role: EOT Overhead Crane Operator | High |
| 1428 | 167 | C004 | Required for target role: EOT Overhead Crane Operator | High |
| 1429 | 167 | C021 | Required for target role: EOT Overhead Crane Operator | High |
| 1430 | 167 | C032 | Required for target role: EOT Overhead Crane Operator | High |
| 1431 | 167 | C033 | Required for target role: EOT Overhead Crane Operator | High |
| 1432 | 167 | C034 | Required for target role: EOT Overhead Crane Operator | High |
| 1433 | 169 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1434 | 169 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1435 | 169 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1436 | 169 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1437 | 169 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1438 | 169 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1439 | 169 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1440 | 169 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1441 | 170 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1442 | 170 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1443 | 170 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1444 | 170 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1445 | 170 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1446 | 170 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1447 | 170 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1448 | 170 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1449 | 171 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1450 | 171 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1451 | 171 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1452 | 171 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1453 | 171 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1454 | 171 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1455 | 171 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1456 | 171 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1457 | 172 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1458 | 172 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1459 | 172 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1460 | 172 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1461 | 172 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1462 | 172 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1463 | 172 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1464 | 172 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1465 | 173 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1466 | 173 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1467 | 173 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1468 | 173 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1469 | 173 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1470 | 173 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1471 | 173 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1472 | 173 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1473 | 174 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1474 | 174 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1475 | 174 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1476 | 174 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1477 | 174 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1478 | 174 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1479 | 174 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1480 | 174 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1481 | 175 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1482 | 175 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1483 | 175 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1484 | 175 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1485 | 175 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1486 | 175 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1487 | 175 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1488 | 175 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1489 | 176 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1490 | 176 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1491 | 176 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1492 | 176 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1493 | 176 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1494 | 176 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1495 | 176 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1496 | 176 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1497 | 177 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1498 | 177 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1499 | 177 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1500 | 177 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1501 | 177 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1502 | 177 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1503 | 177 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1504 | 177 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1505 | 178 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1506 | 178 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1507 | 178 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1508 | 178 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1509 | 178 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1510 | 178 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1511 | 178 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1512 | 178 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1513 | 179 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1514 | 179 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1515 | 179 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1516 | 179 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1517 | 179 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1518 | 179 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1519 | 179 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1520 | 179 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1521 | 180 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1522 | 180 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1523 | 180 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1524 | 180 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1525 | 180 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1526 | 180 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1527 | 180 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1528 | 180 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1529 | 181 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1530 | 181 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1531 | 181 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1532 | 181 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1533 | 181 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1534 | 181 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1535 | 181 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1536 | 181 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1537 | 182 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1538 | 182 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1539 | 182 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1540 | 182 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1541 | 182 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1542 | 182 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1543 | 182 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1544 | 182 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1545 | 183 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1546 | 183 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1547 | 183 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1548 | 183 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1549 | 183 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1550 | 183 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1551 | 183 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1552 | 183 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1553 | 184 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1554 | 184 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1555 | 184 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1556 | 184 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1557 | 184 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1558 | 184 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1559 | 184 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1560 | 184 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1561 | 185 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1562 | 185 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1563 | 185 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1564 | 185 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1565 | 185 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1566 | 185 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1567 | 185 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1568 | 185 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1569 | 186 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1570 | 186 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1571 | 186 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1572 | 186 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1573 | 186 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1574 | 186 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1575 | 186 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1576 | 186 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1577 | 187 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1578 | 187 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1579 | 187 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1580 | 187 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1581 | 187 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1582 | 187 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1583 | 187 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1584 | 187 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1585 | 188 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1586 | 188 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1587 | 188 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1588 | 188 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1589 | 188 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1590 | 188 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1591 | 188 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1592 | 188 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1593 | 189 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1594 | 189 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1595 | 189 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1596 | 189 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1597 | 189 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1598 | 189 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1599 | 189 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1600 | 189 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1601 | 190 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1602 | 190 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1603 | 190 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1604 | 190 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1605 | 190 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1606 | 190 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1607 | 190 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1608 | 190 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1609 | 191 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1610 | 191 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1611 | 191 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1612 | 191 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1613 | 191 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1614 | 191 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1615 | 191 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1616 | 191 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1617 | 192 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1618 | 192 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1619 | 192 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1620 | 192 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1621 | 192 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1622 | 192 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1623 | 192 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1624 | 192 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1625 | 193 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1626 | 193 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1627 | 193 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1628 | 193 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1629 | 193 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1630 | 193 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1631 | 193 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1632 | 193 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1633 | 194 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1634 | 194 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1635 | 194 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1636 | 194 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1637 | 194 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1638 | 194 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1639 | 194 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1640 | 194 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1641 | 195 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1642 | 195 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1643 | 195 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1644 | 195 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1645 | 195 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1646 | 195 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1647 | 195 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1648 | 195 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1649 | 196 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1650 | 196 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1651 | 196 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1652 | 196 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1653 | 196 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1654 | 196 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1655 | 196 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1656 | 196 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1657 | 197 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1658 | 197 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1659 | 197 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1660 | 197 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1661 | 197 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1662 | 197 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1663 | 197 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1664 | 197 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1665 | 198 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1666 | 198 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1667 | 198 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1668 | 198 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1669 | 198 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1670 | 198 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1671 | 198 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1672 | 198 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1673 | 199 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1674 | 199 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1675 | 199 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1676 | 199 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1677 | 199 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1678 | 199 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1679 | 199 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1680 | 199 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1681 | 200 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1682 | 200 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1683 | 200 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1684 | 200 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1685 | 200 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1686 | 200 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1687 | 200 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1688 | 200 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1689 | 201 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1690 | 201 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1691 | 201 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1692 | 201 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1693 | 201 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1694 | 201 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1695 | 201 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1696 | 201 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1697 | 202 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1698 | 202 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1699 | 202 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1700 | 202 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1701 | 202 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1702 | 202 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1703 | 202 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1704 | 202 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1705 | 203 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1706 | 203 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1707 | 203 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1708 | 203 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1709 | 203 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1710 | 203 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1711 | 203 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1712 | 203 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1713 | 204 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1714 | 204 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1715 | 204 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1716 | 204 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1717 | 204 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1718 | 204 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1719 | 204 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1720 | 204 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1721 | 205 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1722 | 205 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1723 | 205 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1724 | 205 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1725 | 205 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1726 | 205 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1727 | 205 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1728 | 205 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1729 | 206 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1730 | 206 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1731 | 206 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1732 | 206 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1733 | 206 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1734 | 206 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1735 | 206 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1736 | 206 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1737 | 207 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1738 | 207 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1739 | 207 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1740 | 207 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1741 | 207 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1742 | 207 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1743 | 207 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1744 | 207 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1745 | 208 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1746 | 208 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1747 | 208 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1748 | 208 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1749 | 208 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1750 | 208 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1751 | 208 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1752 | 208 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1753 | 209 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1754 | 209 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1755 | 209 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1756 | 209 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1757 | 209 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1758 | 209 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1759 | 209 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1760 | 209 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1761 | 210 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1762 | 210 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1763 | 210 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1764 | 210 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1765 | 210 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1766 | 210 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1767 | 210 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1768 | 210 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1769 | 211 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1770 | 211 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1771 | 211 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1772 | 211 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1773 | 211 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1774 | 211 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1775 | 211 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1776 | 211 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1777 | 212 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1778 | 212 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1779 | 212 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1780 | 212 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1781 | 212 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1782 | 212 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1783 | 212 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1784 | 212 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1785 | 213 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1786 | 213 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1787 | 213 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1788 | 213 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1789 | 213 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1790 | 213 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1791 | 213 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1792 | 213 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1793 | 214 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1794 | 214 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1795 | 214 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1796 | 214 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1797 | 214 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1798 | 214 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1799 | 214 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1800 | 214 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1801 | 215 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1802 | 215 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1803 | 215 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1804 | 215 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1805 | 215 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1806 | 215 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1807 | 215 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1808 | 215 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1809 | 216 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1810 | 216 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1811 | 216 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1812 | 216 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1813 | 216 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1814 | 216 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1815 | 216 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1816 | 216 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1817 | 217 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1818 | 217 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1819 | 217 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1820 | 217 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1821 | 217 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1822 | 217 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1823 | 217 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1824 | 217 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1825 | 218 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1826 | 218 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1827 | 218 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1828 | 218 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1829 | 218 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1830 | 218 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1831 | 218 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1832 | 218 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1833 | 219 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1834 | 219 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1835 | 219 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1836 | 219 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1837 | 219 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1838 | 219 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1839 | 219 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1840 | 219 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1841 | 220 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1842 | 220 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1843 | 220 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1844 | 220 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1845 | 220 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1846 | 220 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1847 | 220 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1848 | 220 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1849 | 221 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1850 | 221 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1851 | 221 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1852 | 221 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1853 | 221 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1854 | 221 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1855 | 221 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1856 | 221 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1857 | 222 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1858 | 222 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1859 | 222 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1860 | 222 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1861 | 222 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1862 | 222 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1863 | 222 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1864 | 222 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1865 | 223 | C001 | Required for target role: Laboratory Technician Physical | High |
| 1866 | 223 | C002 | Required for target role: Laboratory Technician Physical | High |
| 1867 | 223 | C003 | Required for target role: Laboratory Technician Physical | High |
| 1868 | 223 | C004 | Required for target role: Laboratory Technician Physical | High |
| 1869 | 223 | C031 | Required for target role: Laboratory Technician Physical | High |
| 1870 | 223 | C032 | Required for target role: Laboratory Technician Physical | High |
| 1871 | 223 | C033 | Required for target role: Laboratory Technician Physical | High |
| 1872 | 223 | C034 | Required for target role: Laboratory Technician Physical | High |
| 1873 | 225 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1874 | 225 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1875 | 225 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1876 | 225 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1877 | 225 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1878 | 225 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1879 | 225 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1880 | 225 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1881 | 226 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 1882 | 226 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 1883 | 226 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 1884 | 226 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 1885 | 226 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 1886 | 226 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 1887 | 226 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 1888 | 226 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 1889 | 227 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1890 | 227 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1891 | 227 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1892 | 227 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1893 | 227 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1894 | 227 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1895 | 227 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1896 | 227 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1897 | 228 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 1898 | 228 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 1899 | 228 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 1900 | 228 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 1901 | 228 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 1902 | 228 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 1903 | 228 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 1904 | 228 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 1905 | 229 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1906 | 229 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1907 | 229 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1908 | 229 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1909 | 229 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1910 | 229 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1911 | 229 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1912 | 229 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1913 | 230 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1914 | 230 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1915 | 230 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1916 | 230 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1917 | 230 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1918 | 230 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1919 | 230 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1920 | 230 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1921 | 231 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 1922 | 231 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 1923 | 231 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 1924 | 231 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 1925 | 231 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 1926 | 231 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 1927 | 231 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 1928 | 231 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 1929 | 232 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1930 | 232 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1931 | 232 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1932 | 232 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1933 | 232 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1934 | 232 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1935 | 232 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1936 | 232 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1937 | 233 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 1938 | 233 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 1939 | 233 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 1940 | 233 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 1941 | 233 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 1942 | 233 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 1943 | 233 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 1944 | 233 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 1945 | 234 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1946 | 234 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1947 | 234 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1948 | 234 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1949 | 234 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1950 | 234 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1951 | 234 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1952 | 234 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1953 | 235 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1954 | 235 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1955 | 235 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1956 | 235 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1957 | 235 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1958 | 235 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1959 | 235 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1960 | 235 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1961 | 236 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1962 | 236 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1963 | 236 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1964 | 236 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1965 | 236 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1966 | 236 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1967 | 236 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1968 | 236 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1969 | 237 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1970 | 237 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1971 | 237 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1972 | 237 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1973 | 237 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1974 | 237 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1975 | 237 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1976 | 237 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1977 | 238 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 1978 | 238 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 1979 | 238 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 1980 | 238 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 1981 | 238 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 1982 | 238 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 1983 | 238 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 1984 | 238 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 1985 | 239 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1986 | 239 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1987 | 239 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1988 | 239 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1989 | 239 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1990 | 239 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1991 | 239 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1992 | 239 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1993 | 240 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1994 | 240 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1995 | 240 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1996 | 240 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1997 | 240 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1998 | 240 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 1999 | 240 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2000 | 240 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2001 | 241 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2002 | 241 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2003 | 241 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2004 | 241 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2005 | 241 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2006 | 241 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2007 | 241 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2008 | 241 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2009 | 242 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2010 | 242 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2011 | 242 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2012 | 242 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2013 | 242 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2014 | 242 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2015 | 242 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2016 | 242 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2017 | 243 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2018 | 243 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2019 | 243 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2020 | 243 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2021 | 243 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2022 | 243 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2023 | 243 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2024 | 243 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2025 | 244 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2026 | 244 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2027 | 244 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2028 | 244 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2029 | 244 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2030 | 244 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2031 | 244 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2032 | 244 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2033 | 245 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2034 | 245 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2035 | 245 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2036 | 245 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2037 | 245 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2038 | 245 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2039 | 245 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2040 | 245 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2041 | 246 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2042 | 246 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2043 | 246 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2044 | 246 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2045 | 246 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2046 | 246 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2047 | 246 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2048 | 246 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2049 | 247 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2050 | 247 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2051 | 247 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2052 | 247 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2053 | 247 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2054 | 247 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2055 | 247 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2056 | 247 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2057 | 248 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2058 | 248 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2059 | 248 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2060 | 248 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2061 | 248 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2062 | 248 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2063 | 248 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2064 | 248 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2065 | 249 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2066 | 249 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2067 | 249 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2068 | 249 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2069 | 249 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2070 | 249 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2071 | 249 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2072 | 249 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2073 | 250 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2074 | 250 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2075 | 250 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2076 | 250 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2077 | 250 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2078 | 250 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2079 | 250 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2080 | 250 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2081 | 251 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2082 | 251 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2083 | 251 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2084 | 251 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2085 | 251 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2086 | 251 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2087 | 251 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2088 | 251 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2089 | 252 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2090 | 252 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2091 | 252 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2092 | 252 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2093 | 252 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2094 | 252 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2095 | 252 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2096 | 252 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2097 | 253 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2098 | 253 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2099 | 253 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2100 | 253 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2101 | 253 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2102 | 253 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2103 | 253 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2104 | 253 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2105 | 254 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2106 | 254 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2107 | 254 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2108 | 254 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2109 | 254 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2110 | 254 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2111 | 254 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2112 | 254 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2113 | 255 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2114 | 255 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2115 | 255 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2116 | 255 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2117 | 255 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2118 | 255 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2119 | 255 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2120 | 255 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2121 | 256 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2122 | 256 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2123 | 256 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2124 | 256 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2125 | 256 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2126 | 256 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2127 | 256 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2128 | 256 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2129 | 257 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2130 | 257 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2131 | 257 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2132 | 257 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2133 | 257 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2134 | 257 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2135 | 257 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2136 | 257 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2137 | 258 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2138 | 258 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2139 | 258 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2140 | 258 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2141 | 258 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2142 | 258 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2143 | 258 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2144 | 258 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2145 | 259 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2146 | 259 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2147 | 259 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2148 | 259 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2149 | 259 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2150 | 259 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2151 | 259 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2152 | 259 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2153 | 260 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2154 | 260 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2155 | 260 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2156 | 260 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2157 | 260 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2158 | 260 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2159 | 260 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2160 | 260 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2161 | 261 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2162 | 261 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2163 | 261 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2164 | 261 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2165 | 261 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2166 | 261 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2167 | 261 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2168 | 261 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2169 | 262 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2170 | 262 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2171 | 262 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2172 | 262 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2173 | 262 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2174 | 262 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2175 | 262 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2176 | 262 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2177 | 263 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2178 | 263 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2179 | 263 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2180 | 263 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2181 | 263 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2182 | 263 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2183 | 263 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2184 | 263 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2185 | 264 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2186 | 264 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2187 | 264 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2188 | 264 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2189 | 264 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2190 | 264 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2191 | 264 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2192 | 264 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2193 | 265 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2194 | 265 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2195 | 265 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2196 | 265 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2197 | 265 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2198 | 265 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2199 | 265 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2200 | 265 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2201 | 266 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2202 | 266 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2203 | 266 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2204 | 266 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2205 | 266 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2206 | 266 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2207 | 266 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2208 | 266 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2209 | 267 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2210 | 267 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2211 | 267 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2212 | 267 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2213 | 267 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2214 | 267 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2215 | 267 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2216 | 267 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2217 | 268 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2218 | 268 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2219 | 268 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2220 | 268 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2221 | 268 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2222 | 268 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2223 | 268 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2224 | 268 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2225 | 269 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2226 | 269 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2227 | 269 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2228 | 269 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2229 | 269 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2230 | 269 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2231 | 269 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2232 | 269 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2233 | 270 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2234 | 270 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2235 | 270 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2236 | 270 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2237 | 270 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2238 | 270 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2239 | 270 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2240 | 270 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2241 | 271 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2242 | 271 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2243 | 271 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2244 | 271 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2245 | 271 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2246 | 271 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2247 | 271 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2248 | 271 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2249 | 272 | C001 | Required for target role: Iron & Steel - Machinist | High |
| 2250 | 272 | C002 | Required for target role: Iron & Steel - Machinist | High |
| 2251 | 272 | C003 | Required for target role: Iron & Steel - Machinist | High |
| 2252 | 272 | C004 | Required for target role: Iron & Steel - Machinist | High |
| 2253 | 272 | C025 | Required for target role: Iron & Steel - Machinist | High |
| 2254 | 272 | C032 | Required for target role: Iron & Steel - Machinist | High |
| 2255 | 272 | C033 | Required for target role: Iron & Steel - Machinist | High |
| 2256 | 272 | C034 | Required for target role: Iron & Steel - Machinist | High |
| 2257 | 273 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2258 | 273 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2259 | 273 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2260 | 273 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2261 | 273 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2262 | 273 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2263 | 273 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2264 | 273 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2265 | 274 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2266 | 274 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2267 | 274 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2268 | 274 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2269 | 274 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2270 | 274 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2271 | 274 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2272 | 274 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2273 | 275 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2274 | 275 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2275 | 275 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2276 | 275 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2277 | 275 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2278 | 275 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2279 | 275 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2280 | 275 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2281 | 276 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2282 | 276 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2283 | 276 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2284 | 276 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2285 | 276 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2286 | 276 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2287 | 276 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2288 | 276 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2289 | 277 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2290 | 277 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2291 | 277 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2292 | 277 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2293 | 277 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2294 | 277 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2295 | 277 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2296 | 277 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2297 | 278 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2298 | 278 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2299 | 278 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2300 | 278 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2301 | 278 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2302 | 278 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2303 | 278 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2304 | 278 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2305 | 279 | C001 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2306 | 279 | C002 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2307 | 279 | C003 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2308 | 279 | C004 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2309 | 279 | C026 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2310 | 279 | C032 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2311 | 279 | C033 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2312 | 279 | C034 | Required for target role: Iron & Steel - Tungsten Inert Gas Welder (GTAW) | High |
| 2313 | 281 | C001 | Required for target role: Refractory Brick Layer | High |
| 2314 | 281 | C002 | Required for target role: Refractory Brick Layer | High |
| 2315 | 281 | C003 | Required for target role: Refractory Brick Layer | High |
| 2316 | 281 | C004 | Required for target role: Refractory Brick Layer | High |
| 2317 | 281 | C029 | Required for target role: Refractory Brick Layer | High |
| 2318 | 281 | C032 | Required for target role: Refractory Brick Layer | High |
| 2319 | 281 | C033 | Required for target role: Refractory Brick Layer | High |
| 2320 | 281 | C034 | Required for target role: Refractory Brick Layer | High |
| 2321 | 282 | C001 | Required for target role: Refractory Brick Layer | High |
| 2322 | 282 | C002 | Required for target role: Refractory Brick Layer | High |
| 2323 | 282 | C003 | Required for target role: Refractory Brick Layer | High |
| 2324 | 282 | C004 | Required for target role: Refractory Brick Layer | High |
| 2325 | 282 | C029 | Required for target role: Refractory Brick Layer | High |
| 2326 | 282 | C032 | Required for target role: Refractory Brick Layer | High |
| 2327 | 282 | C033 | Required for target role: Refractory Brick Layer | High |
| 2328 | 282 | C034 | Required for target role: Refractory Brick Layer | High |
| 2329 | 283 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2330 | 283 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2331 | 283 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2332 | 283 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2333 | 283 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2334 | 283 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2335 | 283 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2336 | 283 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2337 | 284 | C001 | Required for target role: Refractory Brick Layer | High |
| 2338 | 284 | C002 | Required for target role: Refractory Brick Layer | High |
| 2339 | 284 | C003 | Required for target role: Refractory Brick Layer | High |
| 2340 | 284 | C004 | Required for target role: Refractory Brick Layer | High |
| 2341 | 284 | C029 | Required for target role: Refractory Brick Layer | High |
| 2342 | 284 | C032 | Required for target role: Refractory Brick Layer | High |
| 2343 | 284 | C033 | Required for target role: Refractory Brick Layer | High |
| 2344 | 284 | C034 | Required for target role: Refractory Brick Layer | High |
| 2345 | 285 | C001 | Required for target role: Refractory Brick Layer | High |
| 2346 | 285 | C002 | Required for target role: Refractory Brick Layer | High |
| 2347 | 285 | C003 | Required for target role: Refractory Brick Layer | High |
| 2348 | 285 | C004 | Required for target role: Refractory Brick Layer | High |
| 2349 | 285 | C029 | Required for target role: Refractory Brick Layer | High |
| 2350 | 285 | C032 | Required for target role: Refractory Brick Layer | High |
| 2351 | 285 | C033 | Required for target role: Refractory Brick Layer | High |
| 2352 | 285 | C034 | Required for target role: Refractory Brick Layer | High |
| 2353 | 286 | C001 | Required for target role: Refractory Brick Layer | High |
| 2354 | 286 | C002 | Required for target role: Refractory Brick Layer | High |
| 2355 | 286 | C003 | Required for target role: Refractory Brick Layer | High |
| 2356 | 286 | C004 | Required for target role: Refractory Brick Layer | High |
| 2357 | 286 | C029 | Required for target role: Refractory Brick Layer | High |
| 2358 | 286 | C032 | Required for target role: Refractory Brick Layer | High |
| 2359 | 286 | C033 | Required for target role: Refractory Brick Layer | High |
| 2360 | 286 | C034 | Required for target role: Refractory Brick Layer | High |
| 2361 | 287 | C001 | Required for target role: Refractory Brick Layer | High |
| 2362 | 287 | C002 | Required for target role: Refractory Brick Layer | High |
| 2363 | 287 | C003 | Required for target role: Refractory Brick Layer | High |
| 2364 | 287 | C004 | Required for target role: Refractory Brick Layer | High |
| 2365 | 287 | C029 | Required for target role: Refractory Brick Layer | High |
| 2366 | 287 | C032 | Required for target role: Refractory Brick Layer | High |
| 2367 | 287 | C033 | Required for target role: Refractory Brick Layer | High |
| 2368 | 287 | C034 | Required for target role: Refractory Brick Layer | High |
| 2369 | 288 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2370 | 288 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2371 | 288 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2372 | 288 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2373 | 288 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2374 | 288 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2375 | 288 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2376 | 288 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2377 | 289 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2378 | 289 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2379 | 289 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2380 | 289 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2381 | 289 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2382 | 289 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2383 | 289 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2384 | 289 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2385 | 290 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2386 | 290 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2387 | 290 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2388 | 290 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2389 | 290 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2390 | 290 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2391 | 290 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2392 | 290 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2393 | 291 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2394 | 291 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2395 | 291 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2396 | 291 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2397 | 291 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2398 | 291 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2399 | 291 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2400 | 291 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2401 | 292 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2402 | 292 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2403 | 292 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2404 | 292 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2405 | 292 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2406 | 292 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2407 | 292 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2408 | 292 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2409 | 293 | C001 | Required for target role: Refractory Brick Layer | High |
| 2410 | 293 | C002 | Required for target role: Refractory Brick Layer | High |
| 2411 | 293 | C003 | Required for target role: Refractory Brick Layer | High |
| 2412 | 293 | C004 | Required for target role: Refractory Brick Layer | High |
| 2413 | 293 | C029 | Required for target role: Refractory Brick Layer | High |
| 2414 | 293 | C032 | Required for target role: Refractory Brick Layer | High |
| 2415 | 293 | C033 | Required for target role: Refractory Brick Layer | High |
| 2416 | 293 | C034 | Required for target role: Refractory Brick Layer | High |
| 2417 | 294 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2418 | 294 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2419 | 294 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2420 | 294 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2421 | 294 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2422 | 294 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2423 | 294 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2424 | 294 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2425 | 295 | C001 | Required for target role: Refractory Brick Layer | High |
| 2426 | 295 | C002 | Required for target role: Refractory Brick Layer | High |
| 2427 | 295 | C003 | Required for target role: Refractory Brick Layer | High |
| 2428 | 295 | C004 | Required for target role: Refractory Brick Layer | High |
| 2429 | 295 | C029 | Required for target role: Refractory Brick Layer | High |
| 2430 | 295 | C032 | Required for target role: Refractory Brick Layer | High |
| 2431 | 295 | C033 | Required for target role: Refractory Brick Layer | High |
| 2432 | 295 | C034 | Required for target role: Refractory Brick Layer | High |
| 2433 | 296 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2434 | 296 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2435 | 296 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2436 | 296 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2437 | 296 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2438 | 296 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2439 | 296 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2440 | 296 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2441 | 297 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2442 | 297 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2443 | 297 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2444 | 297 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2445 | 297 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2446 | 297 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2447 | 297 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2448 | 297 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2449 | 298 | C001 | Required for target role: Refractory Brick Layer | High |
| 2450 | 298 | C002 | Required for target role: Refractory Brick Layer | High |
| 2451 | 298 | C003 | Required for target role: Refractory Brick Layer | High |
| 2452 | 298 | C004 | Required for target role: Refractory Brick Layer | High |
| 2453 | 298 | C029 | Required for target role: Refractory Brick Layer | High |
| 2454 | 298 | C032 | Required for target role: Refractory Brick Layer | High |
| 2455 | 298 | C033 | Required for target role: Refractory Brick Layer | High |
| 2456 | 298 | C034 | Required for target role: Refractory Brick Layer | High |
| 2457 | 299 | C001 | Required for target role: Refractory Brick Layer | High |
| 2458 | 299 | C002 | Required for target role: Refractory Brick Layer | High |
| 2459 | 299 | C003 | Required for target role: Refractory Brick Layer | High |
| 2460 | 299 | C004 | Required for target role: Refractory Brick Layer | High |
| 2461 | 299 | C029 | Required for target role: Refractory Brick Layer | High |
| 2462 | 299 | C032 | Required for target role: Refractory Brick Layer | High |
| 2463 | 299 | C033 | Required for target role: Refractory Brick Layer | High |
| 2464 | 299 | C034 | Required for target role: Refractory Brick Layer | High |
| 2465 | 300 | C001 | Required for target role: Refractory Brick Layer | High |
| 2466 | 300 | C002 | Required for target role: Refractory Brick Layer | High |
| 2467 | 300 | C003 | Required for target role: Refractory Brick Layer | High |
| 2468 | 300 | C004 | Required for target role: Refractory Brick Layer | High |
| 2469 | 300 | C029 | Required for target role: Refractory Brick Layer | High |
| 2470 | 300 | C032 | Required for target role: Refractory Brick Layer | High |
| 2471 | 300 | C033 | Required for target role: Refractory Brick Layer | High |
| 2472 | 300 | C034 | Required for target role: Refractory Brick Layer | High |
| 2473 | 301 | C001 | Required for target role: Refractory Brick Layer | High |
| 2474 | 301 | C002 | Required for target role: Refractory Brick Layer | High |
| 2475 | 301 | C003 | Required for target role: Refractory Brick Layer | High |
| 2476 | 301 | C004 | Required for target role: Refractory Brick Layer | High |
| 2477 | 301 | C029 | Required for target role: Refractory Brick Layer | High |
| 2478 | 301 | C032 | Required for target role: Refractory Brick Layer | High |
| 2479 | 301 | C033 | Required for target role: Refractory Brick Layer | High |
| 2480 | 301 | C034 | Required for target role: Refractory Brick Layer | High |
| 2481 | 302 | C001 | Required for target role: Refractory Brick Layer | High |
| 2482 | 302 | C002 | Required for target role: Refractory Brick Layer | High |
| 2483 | 302 | C003 | Required for target role: Refractory Brick Layer | High |
| 2484 | 302 | C004 | Required for target role: Refractory Brick Layer | High |
| 2485 | 302 | C029 | Required for target role: Refractory Brick Layer | High |
| 2486 | 302 | C032 | Required for target role: Refractory Brick Layer | High |
| 2487 | 302 | C033 | Required for target role: Refractory Brick Layer | High |
| 2488 | 302 | C034 | Required for target role: Refractory Brick Layer | High |
| 2489 | 303 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2490 | 303 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2491 | 303 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2492 | 303 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2493 | 303 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2494 | 303 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2495 | 303 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2496 | 303 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2497 | 304 | C001 | Required for target role: Refractory Brick Layer | High |
| 2498 | 304 | C002 | Required for target role: Refractory Brick Layer | High |
| 2499 | 304 | C003 | Required for target role: Refractory Brick Layer | High |
| 2500 | 304 | C004 | Required for target role: Refractory Brick Layer | High |
| 2501 | 304 | C029 | Required for target role: Refractory Brick Layer | High |
| 2502 | 304 | C032 | Required for target role: Refractory Brick Layer | High |
| 2503 | 304 | C033 | Required for target role: Refractory Brick Layer | High |
| 2504 | 304 | C034 | Required for target role: Refractory Brick Layer | High |
| 2505 | 305 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2506 | 305 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2507 | 305 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2508 | 305 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2509 | 305 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2510 | 305 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2511 | 305 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2512 | 305 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2513 | 306 | C001 | Required for target role: Refractory Brick Layer | High |
| 2514 | 306 | C002 | Required for target role: Refractory Brick Layer | High |
| 2515 | 306 | C003 | Required for target role: Refractory Brick Layer | High |
| 2516 | 306 | C004 | Required for target role: Refractory Brick Layer | High |
| 2517 | 306 | C029 | Required for target role: Refractory Brick Layer | High |
| 2518 | 306 | C032 | Required for target role: Refractory Brick Layer | High |
| 2519 | 306 | C033 | Required for target role: Refractory Brick Layer | High |
| 2520 | 306 | C034 | Required for target role: Refractory Brick Layer | High |
| 2521 | 307 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2522 | 307 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2523 | 307 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2524 | 307 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2525 | 307 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2526 | 307 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2527 | 307 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2528 | 307 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2529 | 308 | C001 | Required for target role: Refractory Brick Layer | High |
| 2530 | 308 | C002 | Required for target role: Refractory Brick Layer | High |
| 2531 | 308 | C003 | Required for target role: Refractory Brick Layer | High |
| 2532 | 308 | C004 | Required for target role: Refractory Brick Layer | High |
| 2533 | 308 | C029 | Required for target role: Refractory Brick Layer | High |
| 2534 | 308 | C032 | Required for target role: Refractory Brick Layer | High |
| 2535 | 308 | C033 | Required for target role: Refractory Brick Layer | High |
| 2536 | 308 | C034 | Required for target role: Refractory Brick Layer | High |
| 2537 | 309 | C001 | Required for target role: Refractory Brick Layer | High |
| 2538 | 309 | C002 | Required for target role: Refractory Brick Layer | High |
| 2539 | 309 | C003 | Required for target role: Refractory Brick Layer | High |
| 2540 | 309 | C004 | Required for target role: Refractory Brick Layer | High |
| 2541 | 309 | C029 | Required for target role: Refractory Brick Layer | High |
| 2542 | 309 | C032 | Required for target role: Refractory Brick Layer | High |
| 2543 | 309 | C033 | Required for target role: Refractory Brick Layer | High |
| 2544 | 309 | C034 | Required for target role: Refractory Brick Layer | High |
| 2545 | 310 | C001 | Required for target role: Refractory Brick Layer | High |
| 2546 | 310 | C002 | Required for target role: Refractory Brick Layer | High |
| 2547 | 310 | C003 | Required for target role: Refractory Brick Layer | High |
| 2548 | 310 | C004 | Required for target role: Refractory Brick Layer | High |
| 2549 | 310 | C029 | Required for target role: Refractory Brick Layer | High |
| 2550 | 310 | C032 | Required for target role: Refractory Brick Layer | High |
| 2551 | 310 | C033 | Required for target role: Refractory Brick Layer | High |
| 2552 | 310 | C034 | Required for target role: Refractory Brick Layer | High |
| 2553 | 311 | C001 | Required for target role: Refractory Brick Layer | High |
| 2554 | 311 | C002 | Required for target role: Refractory Brick Layer | High |
| 2555 | 311 | C003 | Required for target role: Refractory Brick Layer | High |
| 2556 | 311 | C004 | Required for target role: Refractory Brick Layer | High |
| 2557 | 311 | C029 | Required for target role: Refractory Brick Layer | High |
| 2558 | 311 | C032 | Required for target role: Refractory Brick Layer | High |
| 2559 | 311 | C033 | Required for target role: Refractory Brick Layer | High |
| 2560 | 311 | C034 | Required for target role: Refractory Brick Layer | High |
| 2561 | 312 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2562 | 312 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2563 | 312 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2564 | 312 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2565 | 312 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2566 | 312 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2567 | 312 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2568 | 312 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2569 | 313 | C001 | Required for target role: Refractory Brick Layer | High |
| 2570 | 313 | C002 | Required for target role: Refractory Brick Layer | High |
| 2571 | 313 | C003 | Required for target role: Refractory Brick Layer | High |
| 2572 | 313 | C004 | Required for target role: Refractory Brick Layer | High |
| 2573 | 313 | C029 | Required for target role: Refractory Brick Layer | High |
| 2574 | 313 | C032 | Required for target role: Refractory Brick Layer | High |
| 2575 | 313 | C033 | Required for target role: Refractory Brick Layer | High |
| 2576 | 313 | C034 | Required for target role: Refractory Brick Layer | High |
| 2577 | 314 | C001 | Required for target role: Refractory Brick Layer | High |
| 2578 | 314 | C002 | Required for target role: Refractory Brick Layer | High |
| 2579 | 314 | C003 | Required for target role: Refractory Brick Layer | High |
| 2580 | 314 | C004 | Required for target role: Refractory Brick Layer | High |
| 2581 | 314 | C029 | Required for target role: Refractory Brick Layer | High |
| 2582 | 314 | C032 | Required for target role: Refractory Brick Layer | High |
| 2583 | 314 | C033 | Required for target role: Refractory Brick Layer | High |
| 2584 | 314 | C034 | Required for target role: Refractory Brick Layer | High |
| 2585 | 315 | C001 | Required for target role: Refractory Brick Layer | High |
| 2586 | 315 | C002 | Required for target role: Refractory Brick Layer | High |
| 2587 | 315 | C003 | Required for target role: Refractory Brick Layer | High |
| 2588 | 315 | C004 | Required for target role: Refractory Brick Layer | High |
| 2589 | 315 | C029 | Required for target role: Refractory Brick Layer | High |
| 2590 | 315 | C032 | Required for target role: Refractory Brick Layer | High |
| 2591 | 315 | C033 | Required for target role: Refractory Brick Layer | High |
| 2592 | 315 | C034 | Required for target role: Refractory Brick Layer | High |
| 2593 | 316 | C001 | Required for target role: Refractory Brick Layer | High |
| 2594 | 316 | C002 | Required for target role: Refractory Brick Layer | High |
| 2595 | 316 | C003 | Required for target role: Refractory Brick Layer | High |
| 2596 | 316 | C004 | Required for target role: Refractory Brick Layer | High |
| 2597 | 316 | C029 | Required for target role: Refractory Brick Layer | High |
| 2598 | 316 | C032 | Required for target role: Refractory Brick Layer | High |
| 2599 | 316 | C033 | Required for target role: Refractory Brick Layer | High |
| 2600 | 316 | C034 | Required for target role: Refractory Brick Layer | High |
| 2601 | 317 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2602 | 317 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2603 | 317 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2604 | 317 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2605 | 317 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2606 | 317 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2607 | 317 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2608 | 317 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2609 | 318 | C001 | Required for target role: Refractory Brick Layer | High |
| 2610 | 318 | C002 | Required for target role: Refractory Brick Layer | High |
| 2611 | 318 | C003 | Required for target role: Refractory Brick Layer | High |
| 2612 | 318 | C004 | Required for target role: Refractory Brick Layer | High |
| 2613 | 318 | C029 | Required for target role: Refractory Brick Layer | High |
| 2614 | 318 | C032 | Required for target role: Refractory Brick Layer | High |
| 2615 | 318 | C033 | Required for target role: Refractory Brick Layer | High |
| 2616 | 318 | C034 | Required for target role: Refractory Brick Layer | High |
| 2617 | 319 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2618 | 319 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2619 | 319 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2620 | 319 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2621 | 319 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2622 | 319 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2623 | 319 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2624 | 319 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2625 | 320 | C001 | Required for target role: Refractory Brick Layer | High |
| 2626 | 320 | C002 | Required for target role: Refractory Brick Layer | High |
| 2627 | 320 | C003 | Required for target role: Refractory Brick Layer | High |
| 2628 | 320 | C004 | Required for target role: Refractory Brick Layer | High |
| 2629 | 320 | C029 | Required for target role: Refractory Brick Layer | High |
| 2630 | 320 | C032 | Required for target role: Refractory Brick Layer | High |
| 2631 | 320 | C033 | Required for target role: Refractory Brick Layer | High |
| 2632 | 320 | C034 | Required for target role: Refractory Brick Layer | High |
| 2633 | 321 | C001 | Required for target role: Refractory Brick Layer | High |
| 2634 | 321 | C002 | Required for target role: Refractory Brick Layer | High |
| 2635 | 321 | C003 | Required for target role: Refractory Brick Layer | High |
| 2636 | 321 | C004 | Required for target role: Refractory Brick Layer | High |
| 2637 | 321 | C029 | Required for target role: Refractory Brick Layer | High |
| 2638 | 321 | C032 | Required for target role: Refractory Brick Layer | High |
| 2639 | 321 | C033 | Required for target role: Refractory Brick Layer | High |
| 2640 | 321 | C034 | Required for target role: Refractory Brick Layer | High |
| 2641 | 322 | C001 | Required for target role: Refractory Brick Layer | High |
| 2642 | 322 | C002 | Required for target role: Refractory Brick Layer | High |
| 2643 | 322 | C003 | Required for target role: Refractory Brick Layer | High |
| 2644 | 322 | C004 | Required for target role: Refractory Brick Layer | High |
| 2645 | 322 | C029 | Required for target role: Refractory Brick Layer | High |
| 2646 | 322 | C032 | Required for target role: Refractory Brick Layer | High |
| 2647 | 322 | C033 | Required for target role: Refractory Brick Layer | High |
| 2648 | 322 | C034 | Required for target role: Refractory Brick Layer | High |
| 2649 | 323 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2650 | 323 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2651 | 323 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2652 | 323 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2653 | 323 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2654 | 323 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2655 | 323 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2656 | 323 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2657 | 324 | C001 | Required for target role: Refractory Brick Layer | High |
| 2658 | 324 | C002 | Required for target role: Refractory Brick Layer | High |
| 2659 | 324 | C003 | Required for target role: Refractory Brick Layer | High |
| 2660 | 324 | C004 | Required for target role: Refractory Brick Layer | High |
| 2661 | 324 | C029 | Required for target role: Refractory Brick Layer | High |
| 2662 | 324 | C032 | Required for target role: Refractory Brick Layer | High |
| 2663 | 324 | C033 | Required for target role: Refractory Brick Layer | High |
| 2664 | 324 | C034 | Required for target role: Refractory Brick Layer | High |
| 2665 | 325 | C001 | Required for target role: Refractory Brick Layer | High |
| 2666 | 325 | C002 | Required for target role: Refractory Brick Layer | High |
| 2667 | 325 | C003 | Required for target role: Refractory Brick Layer | High |
| 2668 | 325 | C004 | Required for target role: Refractory Brick Layer | High |
| 2669 | 325 | C029 | Required for target role: Refractory Brick Layer | High |
| 2670 | 325 | C032 | Required for target role: Refractory Brick Layer | High |
| 2671 | 325 | C033 | Required for target role: Refractory Brick Layer | High |
| 2672 | 325 | C034 | Required for target role: Refractory Brick Layer | High |
| 2673 | 326 | C001 | Required for target role: Refractory Brick Layer | High |
| 2674 | 326 | C002 | Required for target role: Refractory Brick Layer | High |
| 2675 | 326 | C003 | Required for target role: Refractory Brick Layer | High |
| 2676 | 326 | C004 | Required for target role: Refractory Brick Layer | High |
| 2677 | 326 | C029 | Required for target role: Refractory Brick Layer | High |
| 2678 | 326 | C032 | Required for target role: Refractory Brick Layer | High |
| 2679 | 326 | C033 | Required for target role: Refractory Brick Layer | High |
| 2680 | 326 | C034 | Required for target role: Refractory Brick Layer | High |
| 2681 | 327 | C001 | Required for target role: Refractory Brick Layer | High |
| 2682 | 327 | C002 | Required for target role: Refractory Brick Layer | High |
| 2683 | 327 | C003 | Required for target role: Refractory Brick Layer | High |
| 2684 | 327 | C004 | Required for target role: Refractory Brick Layer | High |
| 2685 | 327 | C029 | Required for target role: Refractory Brick Layer | High |
| 2686 | 327 | C032 | Required for target role: Refractory Brick Layer | High |
| 2687 | 327 | C033 | Required for target role: Refractory Brick Layer | High |
| 2688 | 327 | C034 | Required for target role: Refractory Brick Layer | High |
| 2689 | 328 | C001 | Required for target role: Refractory Brick Layer | High |
| 2690 | 328 | C002 | Required for target role: Refractory Brick Layer | High |
| 2691 | 328 | C003 | Required for target role: Refractory Brick Layer | High |
| 2692 | 328 | C004 | Required for target role: Refractory Brick Layer | High |
| 2693 | 328 | C029 | Required for target role: Refractory Brick Layer | High |
| 2694 | 328 | C032 | Required for target role: Refractory Brick Layer | High |
| 2695 | 328 | C033 | Required for target role: Refractory Brick Layer | High |
| 2696 | 328 | C034 | Required for target role: Refractory Brick Layer | High |
| 2697 | 329 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2698 | 329 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2699 | 329 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2700 | 329 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2701 | 329 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2702 | 329 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2703 | 329 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2704 | 329 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2705 | 330 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2706 | 330 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2707 | 330 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2708 | 330 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2709 | 330 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2710 | 330 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2711 | 330 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2712 | 330 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2713 | 331 | C001 | Required for target role: Refractory Brick Layer | High |
| 2714 | 331 | C002 | Required for target role: Refractory Brick Layer | High |
| 2715 | 331 | C003 | Required for target role: Refractory Brick Layer | High |
| 2716 | 331 | C004 | Required for target role: Refractory Brick Layer | High |
| 2717 | 331 | C029 | Required for target role: Refractory Brick Layer | High |
| 2718 | 331 | C032 | Required for target role: Refractory Brick Layer | High |
| 2719 | 331 | C033 | Required for target role: Refractory Brick Layer | High |
| 2720 | 331 | C034 | Required for target role: Refractory Brick Layer | High |
| 2721 | 332 | C001 | Required for target role: Refractory Brick Layer | High |
| 2722 | 332 | C002 | Required for target role: Refractory Brick Layer | High |
| 2723 | 332 | C003 | Required for target role: Refractory Brick Layer | High |
| 2724 | 332 | C004 | Required for target role: Refractory Brick Layer | High |
| 2725 | 332 | C029 | Required for target role: Refractory Brick Layer | High |
| 2726 | 332 | C032 | Required for target role: Refractory Brick Layer | High |
| 2727 | 332 | C033 | Required for target role: Refractory Brick Layer | High |
| 2728 | 332 | C034 | Required for target role: Refractory Brick Layer | High |
| 2729 | 333 | C001 | Required for target role: Refractory Brick Layer | High |
| 2730 | 333 | C002 | Required for target role: Refractory Brick Layer | High |
| 2731 | 333 | C003 | Required for target role: Refractory Brick Layer | High |
| 2732 | 333 | C004 | Required for target role: Refractory Brick Layer | High |
| 2733 | 333 | C029 | Required for target role: Refractory Brick Layer | High |
| 2734 | 333 | C032 | Required for target role: Refractory Brick Layer | High |
| 2735 | 333 | C033 | Required for target role: Refractory Brick Layer | High |
| 2736 | 333 | C034 | Required for target role: Refractory Brick Layer | High |
| 2737 | 334 | C001 | Required for target role: Refractory Brick Layer | High |
| 2738 | 334 | C002 | Required for target role: Refractory Brick Layer | High |
| 2739 | 334 | C003 | Required for target role: Refractory Brick Layer | High |
| 2740 | 334 | C004 | Required for target role: Refractory Brick Layer | High |
| 2741 | 334 | C029 | Required for target role: Refractory Brick Layer | High |
| 2742 | 334 | C032 | Required for target role: Refractory Brick Layer | High |
| 2743 | 334 | C033 | Required for target role: Refractory Brick Layer | High |
| 2744 | 334 | C034 | Required for target role: Refractory Brick Layer | High |
| 2745 | 335 | C001 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2746 | 335 | C002 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2747 | 335 | C003 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2748 | 335 | C004 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2749 | 335 | C028 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2750 | 335 | C032 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2751 | 335 | C033 | Required for target role: Fluid Management Operator: Rolling Mills | High |
| 2752 | 335 | C034 | Required for target role: Fluid Management Operator: Rolling Mills | High |
