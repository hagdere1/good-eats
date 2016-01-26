class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      redirect_to static_pages_url # redirect to root once auth works
      # or go through new user process? -> bonus feature
    else
      render :new # redirect from landing page to form?
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
