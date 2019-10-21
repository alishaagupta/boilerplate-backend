"use strict";

global.GenericError = function (message) {
    this.name = 'GenericError';
    this.message = message || 'There was some`` kinda GenericError';
    this.code = 500;
};

GenericError.prototype = Object.create(Error.prototype);
GenericError.prototype.constructor = GenericError;

global.AddressDoesNotExist = function (message) {
    this.name = 'AddressDoesNotExist';
    this.message = 'One of the tasks in the order does not contain address. Please add an address to it before assigning it to the Agent';
    this.code = 404;
};

AddressDoesNotExist.prototype = Object.create(Error.prototype);
AddressDoesNotExist.prototype.constructor = AddressDoesNotExist;

global.DefaultModeError = function (message) {
    this.name = 'DefaultModeError';
    this.message = message || 'Sorry, but the match you are trying to report is in default state now, hence you cannot report it any longer.';
    this.code = 493;
};

DefaultModeError.prototype = Object.create(Error.prototype);
DefaultModeError.prototype.constructor = DefaultModeError;

global.UserDoesNotExist = function (message) {
    this.name = 'UserDoesNotExist';
    this.message =  message  || 'User does not exist';
    this.code = 404;
};

UserDoesNotExist.prototype = Object.create(Error.prototype);
UserDoesNotExist.prototype.constructor = UserDoesNotExist;



global.PlatformNotFoundError = function (message) {
    this.name = 'PlatformNotFoundError';
    this.message = message || 'Selected platform does not exist in our database';
    this.code = 447;
};

PlatformNotFoundError.prototype = Object.create(Error.prototype);
PlatformNotFoundError.prototype.constructor = PlatformNotFoundError;



global.TeamNotFoundError = function (message) {
    this.name = 'TeamNotFoundError';
    this.message = 'Selected team does not exist in our database';
    this.code = 448;
};

TeamNotFoundError.prototype = Object.create(Error.prototype);
TeamNotFoundError.prototype.constructor = TeamNotFoundError;

global.EventNotFound = function (message) {
    this.name = 'EventNotFound';
    this.message = message || 'An event with the following id does not exist';
    this.code = 446;
};

EventNotFound.prototype = Object.create(Error.prototype);
EventNotFound.prototype.constructor = EventNotFound;

global.GameDoesNotExist = function (message) {
    this.name = 'GameDoesNotExist';
    this.message = message || 'Game with following id is not found';
    this.code = 480;
};

GameDoesNotExist.prototype = Object.create(Error.prototype);
GameDoesNotExist.prototype.constructor = GameDoesNotExist;

global.UploadLimitExceeded = function (message) {
    this.name = 'UploadLimitExceeded';
    this.message = "You can only upload at max 5 files. To add one more file delete any one file from the previous list of files.";
    this.code = 500;
};

UploadLimitExceeded.prototype = Object.create(Error.prototype);
UploadLimitExceeded.prototype.constructor = UploadLimitExceeded;

global.MultipleManager = function (message) {
    this.name = 'MultipleManager';
    this.message = message || 'You have added more than on reporting manager for an agent against one team';
    this.code = 500;
};

MultipleManager.prototype = Object.create(Error.prototype);
MultipleManager.prototype.constructor = MultipleManager;

global.NotFoundError = function (message) {
    this.name = 'NotFoundError';
    this.message = message || 'The url you are trying to access does not exist';
    this.code = 404;
};

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

global.InvalidPassword = function (message) {
    this.name = 'InvalidPassword';
    this.message = message || 'You have entered a worng password!!';
    this.code = 490;
};

InvalidPassword.prototype = Object.create(Error.prototype);
InvalidPassword.prototype.constructor = InvalidPassword;

global.NoMoreAssigned = function (message) {
    this.name = 'NoMoreAssigned';
    this.message = message || 'You are no more assigned to this task.';
    this.code = 475;
};

NoMoreAssigned.prototype = Object.create(Error.prototype);
NoMoreAssigned.prototype.constructor = NoMoreAssigned;

global.AlreadyMarkedRead = function (message) {
    this.name = 'AlreadyMarkedRead';
    this.message = message || 'This notification is already marked read.';
    this.code = 420;
};

AlreadyMarkedRead.prototype = Object.create(Error.prototype);
AlreadyMarkedRead.prototype.constructor = AlreadyMarkedRead;

global.AlreadyRegistered = function (message) {
    this.name = 'AlreadyRegistered';
    this.message = message || 'This user is already registered.';
    this.code = 420;
};

AlreadyRegistered.prototype = Object.create(Error.prototype);
AlreadyRegistered.prototype.constructor = AlreadyRegistered;

global.InvalidCurrentPassword = function (message) {
    this.name = 'InvalidCurrentPassword';
    this.message = message || 'You have entered a wrong current password!!';
    this.code = 490;
};

InvalidCurrentPassword.prototype = Object.create(Error.prototype);
InvalidCurrentPassword.prototype.constructor = InvalidCurrentPassword;

global.InvalidCustomerToken = function (message) {
    this.name = 'InvalidCustomerToken';
    this.message = message || 'The customer token has either expired or a wrong token was passed.';
    this.code = 490;
};

global.InvalidAdminToken = function (message) {
    this.name = 'InvalidAdminToken';
    this.message = message || 'The  token has either expired or a wrong token was passed.';
    this.code = 490;
};

InvalidCustomerToken.prototype = Object.create(Error.prototype);
InvalidCustomerToken.prototype.constructor = InvalidCustomerToken;

global.WrongPassword = function (message) {
    this.name = 'WrongPassword';
    this.message = message || 'You have entered a wrong password!!';
    this.code = 420;
};

WrongPassword.prototype = Object.create(Error.prototype);
WrongPassword.prototype.constructor = WrongPassword;

global.AccountNotFound = function (message) {
    this.name = 'AccountNotFound';
    this.message = message || 'This account does not exists in our database';
    this.code = 404;
};

AccountNotFound.prototype = Object.create(Error.prototype);
AccountNotFound.prototype.constructor = AccountNotFound;

global.FileNotFoundError = function (message) {
    this.name = 'FileNotFoundError';
    this.message = message || 'The file you are looking for was not found';
    this.code = 404;
};

FileNotFoundError.prototype = Object.create(Error.prototype);
FileNotFoundError.prototype.constructor = FileNotFoundError;

global.UserNotActiveError = function (message) {
    this.name = 'UserNotActiveError';
    this.message = message || 'The user state is not active. Cannot use account until state is active';
    this.code = 499;
};

UserNotActiveError.prototype = Object.create(Error.prototype);
UserNotActiveError.prototype.constructor = UserNotActiveError;

global.UserExistsErrorEmail = function (message) {
    this.name = 'UserExistsErrorEmail';
    this.message = message || 'A user with the entered email already exists';
    this.code = 475;
};

UserExistsErrorEmail.prototype = Object.create(Error.prototype);
UserExistsErrorEmail.prototype.constructor = UserExistsErrorEmail;


global.UsernameExists = function (message) {
    this.name = 'UsernameExists';
    this.message = message || 'A user with the entered username already exists';
    this.code = 475;
};

UsernameExists.prototype = Object.create(Error.prototype);
UsernameExists.prototype.constructor = UsernameExists;

global.CannotEditYourSelf = function (message) {
    this.name = 'CannotEditYourSelf';
    this.message = message || 'You are not allowed to edit your permission';
    this.code = 475;
};

CannotEditYourSelf.prototype = Object.create(Error.prototype);
CannotEditYourSelf.prototype.constructor = CannotEditYourSelf;

global.LowRankedManagersCannotEdit = function (message) {
    this.name = 'LowRankedManagersCannotEdit';
    this.message = message || 'Low ranked managers cannot edit the Higher ranked managers';
    this.code = 475;
};

LowRankedManagersCannotEdit.prototype = Object.create(Error.prototype);
LowRankedManagersCannotEdit.prototype.constructor = LowRankedManagersCannotEdit;

global.NotAuthorised = function (message) {
    this.name = 'NotAuthorised';
    this.message = message || 'You are not authorised to perform this action';
    this.code = 475;
};

NotAuthorised.prototype = Object.create(Error.prototype);
NotAuthorised.prototype.constructor = NotAuthorised;

global.UserDoesNotExistsErrorEmail = function (message) {
    this.name = 'UserDoesNotExistsErrorEmail';
    this.message = message || 'User does not exist.';
    this.code = 475;
};

UserDoesNotExistsErrorEmail.prototype = Object.create(Error.prototype);
UserDoesNotExistsErrorEmail.prototype.constructor = UserDoesNotExistsErrorEmail;

global.UserExistsErrorEmail = function (message) {
    this.name = 'UserExistsErrorEmail';
    this.message = message || 'A user with the entered email already exists';
    this.code = 475;
};

UserExistsErrorEmail.prototype = Object.create(Error.prototype);
UserExistsErrorEmail.prototype.constructor = UserExistsErrorEmail;

global.UserExistsErrorUsername = function (message) {
    this.name = 'UserExistsErrorUsername';
    this.message = message || 'A user with the entered username already exists';
    this.code = 475;
};

UserExistsErrorUsername.prototype = Object.create(Error.prototype);
UserExistsErrorUsername.prototype.constructor = UserExistsErrorUsername;

global.AlreadyDeletedError = function (message) {
    this.name = 'AlreadyDeletedError';
    this.message = message || 'This has already been deleted by someone else';
    this.code = 475;
};

AlreadyDeletedError.prototype = Object.create(Error.prototype);
AlreadyDeletedError.prototype.constructor = AlreadyDeletedError;

global.StartRadiusCannotBeZero = function (message) {
    this.name = 'StartRadiusCannotBeZero';
    this.message = message || 'Start radius cannot be zero.';
    this.code = 475;
};

StartRadiusCannotBeZero.prototype = Object.create(Error.prototype);
StartRadiusCannotBeZero.prototype.constructor = StartRadiusCannotBeZero;

global.RadiusIncrementCannotBeZero = function (message) {
    this.name = 'RadiusIncrementCannotBeZero';
    this.message = message || 'Radius increment value cannot be zero.';
    this.code = 475;
};

RadiusIncrementCannotBeZero.prototype = Object.create(Error.prototype);
RadiusIncrementCannotBeZero.prototype.constructor = RadiusIncrementCannotBeZero;

global.BatchLimitCannotBeZero = function (message) {
    this.name = 'BatchLimitCannotBeZero';
    this.message = message || 'Batch Limit value cannot be zero.';
    this.code = 475;
};

BatchLimitCannotBeZero.prototype = Object.create(Error.prototype);
BatchLimitCannotBeZero.prototype.constructor = BatchLimitCannotBeZero;

global.BatchSizeCannotBeZero = function (message) {
    this.name = 'BatchSizeCannotBeZero';
    this.message = message || 'Batch Size value cannot be zero.';
    this.code = 475;
};

BatchSizeCannotBeZero.prototype = Object.create(Error.prototype);
BatchSizeCannotBeZero.prototype.constructor = BatchSizeCannotBeZero;

global.MaximumRadiusCannotBeZero = function (message) {
    this.name = 'MaximumRadiusCannotBeZero';
    this.message = message || 'Maximum Radius value cannot be zero.';
    this.code = 475;
};

MaximumRadiusCannotBeZero.prototype = Object.create(Error.prototype);
MaximumRadiusCannotBeZero.prototype.constructor = MaximumRadiusCannotBeZero;

global.RequestTimeCannotBeZero = function (message) {
    this.name = 'RequestTimeCannotBeZero';
    this.message = message || 'Request Time value cannot be zero.';
    this.code = 475;
};

RequestTimeCannotBeZero.prototype = Object.create(Error.prototype);
RequestTimeCannotBeZero.prototype.constructor = RequestTimeCannotBeZero;

global.BatchProcessingTimeCannotBeZero = function (message) {
    this.name = 'BatchProcessingTimeCannotBeZero';
    this.message = message || 'Batch Processing Time value cannot be zero.';
    this.code = 475;
};

BatchProcessingTimeCannotBeZero.prototype = Object.create(Error.prototype);
BatchProcessingTimeCannotBeZero.prototype.constructor = BatchProcessingTimeCannotBeZero;

global.MaximumRadiusCannotBeLess = function (message) {
    this.name = 'MaximumRadiusCannotBeLess';
    this.message = message || 'Maximum Radius value cannot be less than  Radius Increment and Sum of Starting Radius values.';
    this.code = 475;
};

MaximumRadiusCannotBeLess.prototype = Object.create(Error.prototype);
MaximumRadiusCannotBeLess.prototype.constructor = MaximumRadiusCannotBeLess;

global.LastActiveTaskType = function (message) {
    this.name = 'LastActiveTaskType';
    this.message = message || 'Last active task type cannot be blocked';
    this.code = 475;
};

LastActiveTaskType.prototype = Object.create(Error.prototype);
LastActiveTaskType.prototype.constructor = LastActiveTaskType;

global.AlreadyAssignedToSameAgent = function (message) {
    this.name = 'AlreadyAssignedToSameAgent';
    this.message = message || 'This order has already been assigned to this agent';
    this.code = 475;
};

AlreadyAssignedToSameAgent.prototype = Object.create(Error.prototype);
AlreadyAssignedToSameAgent.prototype.constructor = AlreadyAssignedToSameAgent;

global.AlreadyAssignedError = function (message) {
    this.name = 'AlreadyAssignedError';
    this.message = message || 'This task has been already assigned to this agent';
    this.code = 475;
};

AlreadyAssignedError.prototype = Object.create(Error.prototype);
AlreadyAssignedError.prototype.constructor = AlreadyAssignedError;

global.OrderAlreadyAccepted = function (message) {
    this.name = 'OrderAlreadyAccepted';
    this.message = message || 'This order has already been accepted by some other agent';
    this.code = 444;
};

OrderAlreadyAccepted.prototype = Object.create(Error.prototype);
OrderAlreadyAccepted.prototype.constructor = OrderAlreadyAccepted;



global.ValidationErrorTest = function (message) {
    this.name = 'ValidationError';
    this.message = message || 'There were some error in validations';
    this.code = 420;
};

ValidationErrorTest.prototype = Object.create(Error.prototype);
ValidationErrorTest.prototype.constructor = ValidationErrorTest;


global.UserExistsErrorEmployeeCode = function (message) {
    this.name = 'UserExistsErrorEmployeeCode';
    this.message = message || 'A user with the entered employee code already exists';
    this.code = 475;
};

UserExistsErrorEmployeeCode.prototype = Object.create(Error.prototype);
UserExistsErrorEmployeeCode.prototype.constructor = UserExistsErrorEmployeeCode;

global.ValidationError = function (message) {

    console.log('---------');
    this.name = 'ValidationError';
    this.message = message || 'There were errors in validations';
    this.code = 420;
};

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;


global.FileError = function (message) {
    this.name = 'FileError';
    this.message = message || 'There were errors in File Format. Please make sure that it contains fields like first_name, phone_number_one, country_code_one, customer_address, latitude and longitude';
    this.code = 420;
};

FileError.prototype = Object.create(Error.prototype);
FileError.prototype.constructor = FileError;

global.AccessTokenError = function (message) {
    this.name = 'AccessTokenError';
    this.message = message || 'Your session has expired. Your account seems to be active on another device. Kindly login again.';
    this.code = 490;
};

AccessTokenError.prototype = Object.create(Error.prototype);
AccessTokenError.prototype.constructor = AccessTokenError;

global.BlockedError = function (message) {
    this.name = 'BlockedError';
    this.message = message || 'You have been blocked by the admin.';
    this.code = 490;
};

BlockedError.prototype = Object.create(Error.prototype);
BlockedError.prototype.constructor = BlockedError;

global.InvalidLoginError = function (message) {
    this.name = 'InvalidLoginError';
    this.message = message || 'Your Email ID or Password was Incorrect';
    this.code = 490;
};

InvalidLoginError.prototype = Object.create(Error.prototype);
InvalidLoginError.prototype.constructor = InvalidLoginError;


global.NotAPremiumUser = function (message) {
    this.name = 'NotAPremiumUser';
    this.message = message || 'Only premium users can post challenge';
    this.code = 467;
};

NotAPremiumUser.prototype = Object.create(Error.prototype);
NotAPremiumUser.prototype.constructor = NotAPremiumUser;

global.NotYourDeviceError = function (message) {
    this.name = 'NotYourDeviceError';
    this.message = message || `The device ain't yours bruh!! Be cool!!`;
    this.code = 492;
};

NotYourDeviceError.prototype = Object.create(Error.prototype);
NotYourDeviceError.prototype.constructor = NotYourDeviceError;

global.NoPhoneNumberError = function (message) {
    this.name = 'NoPhoneNumberError';
    this.message = message || 'No Phone numbers in your account... Say What!!';
    this.code = 490;
};

NoPhoneNumberError.prototype = Object.create(Error.prototype);
NoPhoneNumberError.prototype.constructor = NoPhoneNumberError;

global.InvalidContentTypeError = function (message) {
    this.name = 'InvalidContentTypeError';
    this.message = message || 'The content type set was invalid';
    this.code = 406;
};

InvalidContentTypeError.prototype = Object.create(Error.prototype);
InvalidContentTypeError.prototype.constructor = InvalidContentTypeError;

global.PhoneNumbersCountFullError = function (message) {
    this.name = 'PhoneNumbersCountFullError';
    this.message = message || 'You have added the maximum number of phone numbers possible';
    this.code = 457;
};

PhoneNumbersCountFullError.prototype = Object.create(Error.prototype);
PhoneNumbersCountFullError.prototype.constructor = PhoneNumbersCountFullError;

global.InvalidVerificationPinError = function (message) {
    this.name = 'InvalidVerificationPinError';
    this.message = message || 'The pin you have entered is invalid';
    this.code = 422;
};

InvalidVerificationPinError.prototype = Object.create(Error.prototype);
InvalidVerificationPinError.prototype.constructor = InvalidVerificationPinError;

global.ExpiredVerificationPinError = function (message) {
    this.name = 'ExpiredVerificationPinError';
    this.message = message || 'The pin you have entered has probably expired';
    this.code = 423;
};

ExpiredVerificationPinError.prototype = Object.create(Error.prototype);
ExpiredVerificationPinError.prototype.constructor = ExpiredVerificationPinError;

global.InvalidPhoneNumberError = function (message) {
    this.name = 'InvalidPhoneNumberError';
    this.message = message || 'The phone number entered is Invalid';
    this.code = 451;
};

InvalidPhoneNumberError.prototype = Object.create(Error.prototype);
InvalidPhoneNumberError.prototype.constructor = InvalidPhoneNumberError;

global.PhoneNumberNotLinkedToUserError = function (message) {
    this.name = 'PhoneNumberNotLinkedToUserError';
    this.message = message || 'The phone number you are trying to access does not belong to you';
    this.code = 468;
};

global.PhoneNumberNotGreaterThanOneError = function (message) {
    this.name = 'PhoneNumberNotGreaterThanOneError';
    this.message = message || 'You do not have more than one phone number';
    this.code = 469;
};

PhoneNumberNotGreaterThanOneError.prototype = Object.create(Error.prototype);
PhoneNumberNotGreaterThanOneError.prototype.constructor = PhoneNumberNotGreaterThanOneError;

global.BusinessEmailAlreadyExists = function (message) {
    this.name = 'BusinessEmailAlreadyExists';
    this.message = message || 'This Buisness Email already exists. Please use another';
    this.code = 474;
};

BusinessEmailAlreadyExists.prototype = Object.create(Error.prototype);
BusinessEmailAlreadyExists.prototype.constructor = BusinessEmailAlreadyExists;

global.ServiceRegionAlreadyExists = function (message) {
    this.name = 'ServiceRegionAlreadyExists';
    this.message = message || 'This Service Region already exists. Please use another';
    this.code = 474;
};

ServiceRegionAlreadyExists.prototype = Object.create(Error.prototype);
ServiceRegionAlreadyExists.prototype.constructor = ServiceRegionAlreadyExists;

global.AlreadySent = function (message) {
    this.name = 'AlreadySent';
    this.message = message || 'This Task Type Name already exists. Please use another';
    this.code = 474;
};

AlreadySent.prototype = Object.create(Error.prototype);
AlreadySent.prototype.constructor = AlreadySent;

global.TemplateAlreadyExists = function (message) {
    this.name = 'TemplateAlreadyExists';
    this.message = message || 'This Template Name already exists. Please use another';
    this.code = 474;
};

TemplateAlreadyExists.prototype = Object.create(Error.prototype);
TemplateAlreadyExists.prototype.constructor = TemplateAlreadyExists;

global.TeamNameAlreadyExists = function (message) {
    this.name = 'TeamNameAlreadyExists';
    this.message = message || 'This Team Name already exists. Please use another';
    this.code = 474;
};

TeamNameAlreadyExists.prototype = Object.create(Error.prototype);
TeamNameAlreadyExists.prototype.constructor = TeamNameAlreadyExists;


global.TeamInitialsAlreadyExists = function (message) {
    this.name = 'TeamInitialsAlreadyExists';
    this.message = message || 'This Team Initaials already exists. Please use another';
    this.code = 474;
};

TeamInitialsAlreadyExists.prototype = Object.create(Error.prototype);
TeamInitialsAlreadyExists.prototype.constructor = TeamInitialsAlreadyExists;


global.SyncTimestampError = function (message) {
    this.name = 'SyncTimestampError';
    this.message = message || 'The timestamps do not match. Start over with store and sync';
    this.code = 445;
};

SyncTimestampError.prototype = Object.create(Error.prototype);
SyncTimestampError.prototype.constructor = SyncTimestampError;

global.DeviceNotActivatedError = function (message) {
    this.name = 'DeviceNotActivatedError';
    this.message = message || 'The device has not been activated through email yet!!';
    this.code = 495;
};

DeviceNotActivatedError.prototype = Object.create(Error.prototype);
DeviceNotActivatedError.prototype.constructor = DeviceNotActivatedError;

global.TransactionFailureError = function (message) {
    this.name = 'TransactionFailureError';
    this.message = message || 'The transaction has failed';
    this.code = 434;
};

TransactionFailureError.prototype = Object.create(Error.prototype);
TransactionFailureError.prototype.constructor = TransactionFailureError;


global.PasswordDoesNotMatchError = function (message) {
    this.name = 'PasswordDoesNotMatchError';
    this.message = message || 'Passwords do not match';
    this.code = 434;
};

PasswordDoesNotMatchError.prototype = Object.create(Error.prototype);
PasswordDoesNotMatchError.prototype.constructor = PasswordDoesNotMatchError;


global.AccountNotVerifiedError = function (message) {
    this.name = 'AccountNotVerifiedError';
    this.message = message || 'The account has not been verified through email yet!!';
    this.code = 495;
};

DeviceNotActivatedError.prototype = Object.create(Error.prototype);
DeviceNotActivatedError.prototype.constructor = DeviceNotActivatedError;


global.AlreadyAMember = function (message) {
    this.name = 'AlreadyAMember';
    this.message = message || 'The user you are trying to add is already member of the team!';
    this.code = 449;
};

AlreadyAMember.prototype = Object.create(Error.prototype);
AlreadyAMember.prototype.constructor = AlreadyAMember;


global.MemberNotFoundError = function (message) {
    this.name = 'MemberNotFoundError';
    this.message = message || 'The user you are tryng to remove is not a member of the team!';
    this.code = 450;
};

MemberNotFoundError.prototype = Object.create(Error.prototype);
MemberNotFoundError.prototype.constructor = MemberNotFoundError;



global.NotEnoughBalance = function (message) {
    this.name = 'NotEnoughBalance';
    this.message = message || 'You do not have sufficient balance';
    this.code = 483;
};

NotEnoughBalance.prototype = Object.create(Error.prototype);
NotEnoughBalance.prototype.constructor = NotEnoughBalance;

global.NotEnoughBid = function (message) {
    this.name = 'NotEnoughBid';
    this.message = message || 'You need to bid more pro coins to be able to bid';
    this.code = 484;
};

NotEnoughBid.prototype = Object.create(Error.prototype);
NotEnoughBid.prototype.constructor = NotEnoughBid;