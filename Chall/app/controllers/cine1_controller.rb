class Cine1Controller < ApplicationController

  def index
    @cine1s = Cine1.all
    render json: @cine1s
  end

end
