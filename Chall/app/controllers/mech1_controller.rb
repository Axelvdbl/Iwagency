class Mech1Controller < ApplicationController

  def index
    @mech1s = Mech1.all
    render json: @mech1s
  end

end
