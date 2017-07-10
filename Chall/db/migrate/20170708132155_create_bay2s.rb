class CreateBay2s < ActiveRecord::Migration[5.1]
  def change
    create_table :bay2s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
