# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

P_cinema = [
  [ "Kinepolis", " Adresse: 1 Rue du Château d'Isenghien, 59160 Lomme, Téléphone: 03 20 17 04 00" ],
  [ "Arcs En Ciel", "Adresse: 4 Place du Général de Gaulle, 59190 Hazebrouck, Téléphone: 03 28 48 08 34" ],
]

P_cinema.each do |name, places|
  Cinema.create( title: name, description: places )
end

P_cine1 = [
  [ "Salle A", "270 places" ],
  [ "Salle B", "300 places" ],
  [ "Salle C", "350 places" ],
]

P_cine1.each do |name, places|
  Cine1.create( title: name, description: places )
end

P_salle1 = [
  [ "Star Wars", "Genre: Science-fiction, Durée: 2h15" ],
  [ "Le Transporteur", "Genre: Action, Durée: 1h45" ],
  [ "Baywatch", "Genre: Comédie, Durée: 1h50" ],
  [ "Le Seigneur des anneaux", "Genre: Fantaisie, Durée: 3h00" ],
]
P_salle1.each do |name, sum|
  Salle1.create( title: name, description: sum )
end

P_star1 = [
  [ "Lundi", "Séance: 9h15" ],
  [ "Mercredi", "Séance: 11h30" ],
  [ "Samedi", "Séance: 10h30" ],
]
P_star1.each do |name, sum|
  Star1.create( title: name, description: sum )
end

P_transp1 = [
  [ "Mardi", "Séance: 9h30" ],
  [ "Mercredi", "Séance: 9h15" ],
  [ "Vendredi", "Séance: 14h30" ],
]
P_transp1.each do |name, sum|
  Transp1.create( title: name, description: sum )
end

P_bay1 = [
  [ "Lundi", "Séance: 13h30" ],
  [ "Mercredi", "Séance: 14h00" ],
  [ "Jeudi", "Séance: 9h15" ],
]
P_bay1.each do |name, sum|
  Bay1.create( title: name, description: sum )
end

P_seign1 = [
  [ "Mardi", "Séance: 13h30" ],
  [ "Jeudi", "Séance: 13h30" ],
  [ "Samedi", "Séance: 14h30" ],
]
P_seign1.each do |name, sum|
  Seign1.create( title: name, description: sum )
end



P_salle2 = [
  [ "Les Tuches", "Genre: Comédie, Durée: 1h30" ],
  [ "Fast and Furious", "Genre: Action, Durée: 2h00" ],
  [ "Moi Moche Et Mechant 3", "Genre: Animé, Durée: 1h30" ],
  [ "La Momie", "Genre: Fantaisie, Durée: 2h00" ],
]
P_salle2.each do |name, sum|
  Salle2.create( title: name, description: sum )
end

P_tuches1 = [
  [ "Mardi", "Séance: 9h15" ],
  [ "Mercredi", "Séance: 10h30" ],
  [ "Jeudi", "Séance: 11h15" ],
]
P_tuches1.each do |name, sum|
  Tuches1.create( title: name, description: sum )
end

P_fast1 = [
  [ "Lundi", "Séance: 11h30" ],
  [ "Mercredi", "Séance: 13h30" ],
  [ "Samedi", "Séance: 10h30" ],
]
P_fast1.each do |name, sum|
  Fast1.create( title: name, description: sum )
end

P_mmm1 = [
  [ "Mercredi", "Séance: 16h30" ],
  [ "Vendredi", "Séance: 9h15" ],
  [ "Samedi", "Séance: 14h30" ],
]
P_mmm1.each do |name, sum|
  Mmm1.create( title: name, description: sum )
end

P_momie1 = [
  [ "Lundi", "Séance: 14h30" ],
  [ "Mardi", "Séance: 14h30" ],
  [ "Vendredi", "Séance: 13h30" ],
]
P_momie1.each do |name, sum|
  Momie1.create( title: name, description: sum )
end



P_salle3 = [
  [ "Pirates Des Caraïbes", "Genre: Fantaisie, Durée: 2h30" ],
  [ "Transformers 5", "Genre: Action, Durée: 2h00" ],
  [ "Mechanic Resurrection", "Genre: Action, Durée: 2h00" ],
  [ "Wonder Woman", "Genre: Science-fiction, Durée: 2h00" ],
]
P_salle3.each do |name, sum|
  Salle3.create( title: name, description: sum )
end

P_pirate1 = [
  [ "Mardi", "Séance: 9h15" ],
  [ "Vendredi", "Séance: 10h15" ],
  [ "Samedi", "Séance: 14h30" ],
]
P_pirate1.each do |name, sum|
  Pirate1.create( title: name, description: sum )
end

P_trans1 = [
  [ "Lundi", "Séance: 10h30" ],
  [ "Mercredi", "Séance: 9h15" ],
  [ "Vendredi", "Séance: 14h30" ],
]
P_trans1.each do |name, sum|
  Trans1.create( title: name, description: sum )
end

P_mech1 = [
  [ "Mercredi", "Séance: 14h30" ],
  [ "Jeudi", "Séance: 14h30" ],
  [ "Samedi", "Séance: 9h15" ],
]
P_mech1.each do |name, sum|
  Mech1.create( title: name, description: sum )
end

P_wonder1 = [
  [ "Lundi", "Séance: 14h30" ],
  [ "Mardi", "Séance: 14h30" ],
  [ "Jeudi", "Séance: 9h15" ],
]
P_wonder1.each do |name, sum|
  Wonder1.create( title: name, description: sum )
end





P_cine2 = [
  [ "Salle A", "320 places" ],
  [ "Salle B", "350 places" ],
  [ "Salle C", "370 places" ],
]

P_cine2.each do |name, places|
  Cine2.create( title: name, description: places )
end

P_salle4 = [
  [ "Star Wars", "Genre: Science-fiction, Durée: 2h15" ],
  [ "Wonder Woman", "Genre: Science-fiction, Durée: 2h00" ],
  [ "Pirates Des Caraïbes", "Genre: Fantaisie, Durée: 2h30" ],
  [ "Fast and Furious", "Genre: Action, Durée: 2h00" ],
]
P_salle4.each do |name, sum|
  Salle4.create( title: name, description: sum )
end

P_star2 = [
  [ "Mardi", "Séance: 10h15" ],
  [ "Vendredi", "Séance: 14h30" ],
  [ "Samedi", "Séance: 9h15" ],
]
P_star2.each do |name, sum|
  Star2.create( title: name, description: sum )
end

P_wonder2 = [
  [ "Lundi", "Séance: 11h30" ],
  [ "Mercredi", "Séance: 9h15" ],
  [ "Samedi", "Séance: 13h30" ],
]
P_wonder2.each do |name, sum|
  Wonder2.create( title: name, description: sum )
end

P_pirate2 = [
  [ "Lundi", "Séance: 16h30" ],
  [ "Mardi", "Séance: 14h30" ],
  [ "Jeudi", "Séance: 9h15" ],
]
P_pirate2.each do |name, sum|
  Pirate2.create( title: name, description: sum )
end

P_fast2 = [
  [ "Mercredi", "Séance: 16h30" ],
  [ "Jeudi", "Séance: 14h30" ],
  [ "Vendredi", "Séance: 10h150" ],
]
P_fast2.each do |name, sum|
  Fast2.create( title: name, description: sum )
end



P_salle5 = [
  [ "Transformers 5", "Genre: Action, Durée: 2h00" ],
  [ "La Momie", "Genre: Fantaisie, Durée: 2h00" ],
  [ "Le Seigneur des anneaux", "Genre: Fantaisie, Durée: 3h00" ],
  [ "Le Transporteur", "Genre: Action, Durée: 1h45" ],
]
P_salle5.each do |name, sum|
  Salle5.create( title: name, description: sum )
end

P_trans2 = [
  [ "Mercredi", "Séance: 9h15" ],
  [ "Jeudi", "Séance: 11h30" ],
  [ "Samedi", "Séance: 10h15" ],
]
P_trans2.each do |name, sum|
  Trans2.create( title: name, description: sum )
end

P_momie2 = [
  [ "Lundi", "Séance: 9h15" ],
  [ "Mercredi", "Séance: 13h30" ],
  [ "Jeudi", "Séance: 15h30" ],
]
P_momie2.each do |name, sum|
  Momie2.create( title: name, description: sum )
end

P_seign2 = [
  [ "Lundi", "Séance: 14h30" ],
  [ "Mardi", "Séance: 9h15" ],
  [ "Samedi", "Séance: 11h15" ],
]
P_seign2.each do |name, sum|
  Seign2.create( title: name, description: sum )
end

P_transp2 = [
  [ "Mardi", "Séance: 13h30" ],
  [ "Vendredi", "Séance: 11h15" ],
  [ "Samedi", "Séance: 16h30" ],
]
P_transp2.each do |name, sum|
  Transp2.create( title: name, description: sum )
end



P_salle6 = [
  [ "Mechanic Resurrection", "Genre: Action, Durée: 2h00" ],
  [ "Moi Moche Et Mechant 3", "Genre: Animé, Durée: 1h30" ],
  [ "Baywatch", "Genre: Comédie, Durée: 1h50" ],
  [ "Les Tuches", "Genre: Comédie, Durée: 1h30" ],
]
P_salle6.each do |name, sum|
  Salle6.create( title: name, description: sum )
end

P_mech2 = [
  [ "Mercredi", "Séance: 9h15" ],
  [ "Vendredi", "Séance: 14h30" ],
  [ "Samedi", "Séance: 9h30" ],
]
P_mech2.each do |name, sum|
  Mech2.create( title: name, description: sum )
end

P_mmm2 = [
  [ "Lundi", "Séance: 9h30" ],
  [ "Vendredi", "Séance: 11h30" ],
  [ "Samedi", "Séance: 13h30" ],
]
P_mmm2.each do |name, sum|
  Mmm2.create( title: name, description: sum )
end

P_bay2 = [
  [ "Lundi", "Séance: 14h30" ],
  [ "Mardi", "Séance: 15h45" ],
  [ "Samedi", "Séance: 16h30" ],
]
P_bay2.each do |name, sum|
  Bay2.create( title: name, description: sum )
end

P_tuches2 = [
  [ "Mardi", "Séance: 11h15" ],
  [ "Mercredi", "Séance: 14h30" ],
  [ "Jeudi", "Séance: 13h30" ],
]
P_tuches2.each do |name, sum|
  Tuches2.create( title: name, description: sum )
end
