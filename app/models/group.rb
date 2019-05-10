class Group < ApplicationRecord
  has_many :users, through: :group_users
  has_many :group_users
  validates :name, presence: true
  def new
    @group = Group.new
    @users = User.all
  end


  private

  def user_params
    params.require(:user).permit(:name, user_ids: [])
  end

end
