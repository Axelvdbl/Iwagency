class Tuches1Controller < ApplicationController

  def index
    @tuches1s = Tuches1.all
    render json: @tuches1s
  end

end
