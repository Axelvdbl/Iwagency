class Salle2Controller < ApplicationController

  def index
    @salle2s = Salle2.all
    render json: @salle2s
  end

end
