class CreateTransp1s < ActiveRecord::Migration[5.1]
  def change
    create_table :transp1s do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
