//Data tuples are organized by category, and then date published, except the intro videos which come first in a category. In the future, I'll add some sorting into the JS to fix this specificity//
//Order is the order in which the videos came out, with the lowest number being the first released and vice versa//
var data = [
    {"id": "GsdSqBPV85Q", "title": "Introduction to Chest",     "category": "Chest", "order": "1",  "description": ""},
    {"id": "Nj1U75GbQDY", "title": "Bench Press",               "category": "Chest", "order": "4",  "description": ""},
    {"id": "tZrX7ft9mDk", "title": "Chest Flys",                "category": "Chest", "order": "7",  "description": ""},
    {"id": "VcyPOHnl4aI", "title": "Push-Ups",                  "category": "Chest", "order": "10", "description": ""},

    {"id": "pUm3DbSwwlU", "title": "Introduction to Arms",      "category": "Arms",  "order": "2",  "description": ""},
    {"id": "-JinLE0EIFU", "title": "Supinated Curls",           "category": "Arms",  "order": "5",  "description": ""},
    {"id": "p2xNyx9KJpA", "title": "Overhead Tricep Extensions","category": "Arms",  "order": "8",  "description": ""},
    {"id": "hwzyEtlJZXg", "title": "Chin-Ups",                  "category": "Arms",  "order": "13", "description": ""},

    {"id": "x-MtrAYtbDs", "title": "Introduction to Back",      "category": "Back",  "order": "3",  "description": ""},
    {"id": "ekfHyVJxBcQ", "title": "Good Mornings",             "category": "Back",  "order": "6",  "description": ""},
    {"id": "6QAl3mBa0qM", "title": "Dumbbell Rows",             "category": "Back",  "order": "9",  "description": ""},
    {"id": "ldkAIHgHhD0", "title": "Pull-Ups",                  "category": "Back",  "order": "14", "description": ""},
    
    {"id": "nGrVEOdzPug", "title": "Introduction to Legs",      "category": "Legs",  "order": "18", "description": ""},
    {"id": "-WPaMfs878A", "title": "Romanian Deadlifts",        "category": "Legs",  "order": "11", "description": ""},
    {"id": "sq7wOyrxZMo", "title": "Deadlifts",                 "category": "Legs",  "order": "15", "description": ""},
    {"id": "m63rP7QD9Ao", "title": "Squats",                    "category": "Legs",  "order": "16", "description": ""},

    {"id": "aAIjtkriN-w", "title": "Introduction to Core",      "category": "Core",  "order": "19", "description": ""},
    {"id": "1dj_Ojm52zg", "title": "Crunches",                  "category": "Core",  "order": "12", "description": ""},
    {"id": "6EgeS9MVryQ", "title": "Leg-Raises",                "category": "Core",  "order": "17", "description": ""},
    {"id": "7kXJBzbrqpY", "title": "Oblique Crunches",          "category": "Core",  "order": "20", "description": ""}

];