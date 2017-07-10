class Salle3Controller < ApplicationController

  def index
    @salle3s = Salle3.all
    render json: @salle3s
  end

end
