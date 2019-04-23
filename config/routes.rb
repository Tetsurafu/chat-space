Rails.application.routes.draw do
  get 'top' => 'messages#index'
  # 仮置きのルーティングとして、messages_controllerのindexアクションがルートパスになるようにしてください。
end

# テスト
# テスト2
