class Salle6Controller < ApplicationController

  def index
    @salle6s = Salle6.all
    render json: @salle6s
  end

end
