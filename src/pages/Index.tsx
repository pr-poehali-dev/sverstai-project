import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 text-white">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rotate-45 transform origin-center"></div>
          <span className="text-xl font-semibold">any.rest</span>
        </div>
        <Icon name="Bell" size={24} className="text-white" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-sm bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-medium text-gray-900">
              Авторизация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Введите email"
                  className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              Войти
            </Button>

            <div className="text-center">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Забыли пароль?
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              Нет аккаунта?{" "}
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Зарегистрироваться
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
