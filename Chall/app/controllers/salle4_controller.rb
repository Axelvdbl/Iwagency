class Salle4Controller < ApplicationController

  def index
    @salle4s = Salle4.all
    render json: @salle4s
  end

end
