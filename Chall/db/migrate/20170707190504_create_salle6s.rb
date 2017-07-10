class CreateSalle6s < ActiveRecord::Migration[5.1]
  def change
    create_table :salle6s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
