class CreateStar1s < ActiveRecord::Migration[5.1]
  def change
    create_table :star1s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
