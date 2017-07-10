class Salle1Controller < ApplicationController
  def
     index
    @salle1s = Salle1.all
    render json: @salle1s
  end

end
