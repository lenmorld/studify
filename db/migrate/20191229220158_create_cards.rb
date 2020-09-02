class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.text :question
      # t.text :answer
      
      # enum must be integer
      t.integer :answer_type, default: 0, index: true
      
      # t.text :type
      # t.primary_key :id
      
      # t.integer :answers, array: true
      
      t.jsonb :options, null: true

      t.jsonb :answers, null: true
      t.text :answer_notes

      t.timestamps
    end
  end
end
