class CreateWonder2s < ActiveRecord::Migration[5.1]
  def change
    create_table :wonder2s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
