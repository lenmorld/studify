# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cards = Card.create([
    {
        question: "What is resource routing?",
        answers: [ { text: "Resource routing allows you to declare all common routes for a give resourceful controller" } ].to_json
    },
    {
        question: "What common routes are included when doing resouce routing?",
        # options: {},
        answers: [ { text: "index, show, new, edit, create"}].to_json
    },
    {
        answer_type: "multiple",
        question: "Which is the right letter?",
        options:  { "a": "The A option", "b": "The B option" }.to_json,
        answers: {
            "answers": ["a"]
        }.to_json
    },
    {
        answer_type: "true_false",
        question: "Is it true?",
        answers: [true].to_json,
        answer_notes: "well, you're right :) emoji test - 👩‍🚀🤩",
    }
])
