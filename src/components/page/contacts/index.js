import React from "react";
import { MainWrapper } from "./index.styles";

export const ContactsPage = () => {
    return (
    <MainWrapper>
        <h2>Основные контакты</h2>
        <h4>📍 Адрес:</h4>
        <p>г. Домоград, ул. Примерная, 123, ТЦ «Домашний», 2 этаж</p>
        <h4>📞 Телефон::</h4>
        <p>*+7 (XXX) XXX-XX-XX* (многоканальный)</p>
        <p>*+7 (XXX) XXX-XX-XX* (менеджер по оптовым заказам)</p>
        <h4>✉ Email:</h4>
        <p>info@house-staff.ru – общие вопросы</p>
        <p>support@house-staff.ru – служба поддержки</p>
    </MainWrapper>
    );
};
