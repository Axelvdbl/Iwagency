class Wonder1Controller < ApplicationController

  def index
    @wonder1s = Wonder1.all
    render json: @wonder1s
  end

end
