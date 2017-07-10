class Trans1Controller < ApplicationController

  def index
    @trans1s = Trans1.all
    render json: @trans1s
  end

end
