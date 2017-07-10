class Momie1Controller < ApplicationController

  def index
    @momie1s = Momie1.all
    render json: @momie1s
  end

end
