class Wonder2Controller < ApplicationController

  def index
    @wonder2s = Wonder2.all
    render json: @wonder2s
  end

end
