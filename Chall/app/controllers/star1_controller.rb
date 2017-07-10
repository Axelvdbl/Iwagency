class Star1Controller < ApplicationController

  def index
    @star1s = Star1.all
    render json: @star1s
  end

end
