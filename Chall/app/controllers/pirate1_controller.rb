class Pirate1Controller < ApplicationController

  def index
    @pirate1s = Pirate1.all
    render json: @pirate1s
  end

end
