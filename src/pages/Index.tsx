import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Еда", icon: "UtensilsCrossed" },
    { name: "Эмоции", icon: "Smile" },
    { name: "Жилье", icon: "Home" },
    { name: "Маршруты", icon: "MapPin" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 flex">
      {/* Left Panel */}
      <div className="w-96 bg-white/90 backdrop-blur-sm p-6 flex flex-col">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-6 h-6 bg-orange-500 rotate-45 transform origin-center"></div>
          <span className="text-xl font-semibold text-gray-900">any.rest</span>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Найдем..."
              className="w-full h-12 pl-4 pr-12 bg-gray-100 border-0 rounded-xl text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
            <Icon
              name="Search"
              size={20}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">например: кофейня Москва</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center space-x-2 px-4 py-2 bg-white/80 border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 transition-colors"
            >
              <Icon
                name={category.icon as any}
                size={18}
                className="text-gray-600"
              />
              <span className="text-gray-700">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-end space-x-4 mb-6">
          <Icon
            name="User"
            size={24}
            className="text-white/80 hover:text-white cursor-pointer transition-colors"
          />
          <Icon
            name="Bell"
            size={24}
            className="text-white/80 hover:text-white cursor-pointer transition-colors"
          />
        </div>

        {/* Notifications */}
        <div className="space-y-4 max-w-md ml-auto">
          {/* Trip Reminder */}
          <Card className="bg-orange-500 text-white border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="Calendar"
                  size={20}
                  className="text-white/90 mt-0.5"
                />
                <div>
                  <div className="text-sm font-medium mb-1">
                    20:02, 15.06.2025
                  </div>
                  <div className="text-sm">
                    <Icon name="MapPin" size={16} className="inline mr-1" />
                    До вашей поездки - 3 часа.
                  </div>
                  <div className="text-sm mt-1">
                    Не забудьте проверить ваши документы, билеты и багаж
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Москва</div>
                    <div className="text-sm text-gray-600">район Беговой</div>
                    <div className="text-sm text-gray-600">
                      1-я улица Ямского поля
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
                >
                  ЧТО РЯДОМ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
