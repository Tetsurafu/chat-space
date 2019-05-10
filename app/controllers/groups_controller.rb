class GroupsController < ApplicationController
  protect_from_forgery except: :create
  def new
    @group = Group.new
    @users = User.all
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def update
  end

  def index
  end

  def edit
    @group = Group.new
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => []})
  end

  def user_params
    params.require(:user).permit(:name, user_ids: [])
  end
end
