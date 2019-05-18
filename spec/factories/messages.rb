FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/spec/fixtures/img/jimi_hendrix.jpg")}
    user
    group
  end
end
