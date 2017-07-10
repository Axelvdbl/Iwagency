class Tuches2Controller < ApplicationController

  def index
    @tuches2s = Tuches2.all
    render json: @tuches2s
  end

end
