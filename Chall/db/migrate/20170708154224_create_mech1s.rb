class CreateMech1s < ActiveRecord::Migration[5.1]
  def change
    create_table :mech1s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
