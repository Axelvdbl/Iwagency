class CreateSalle4s < ActiveRecord::Migration[5.1]
  def change
    create_table :salle4s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
