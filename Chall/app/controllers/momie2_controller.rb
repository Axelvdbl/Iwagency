class Momie2Controller < ApplicationController

  def index
    @momie2s = Momie2.all
    render json: @momie2s
  end

end
